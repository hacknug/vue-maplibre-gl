import type { Map } from "maplibre-gl";
import type { MglMap } from "@/lib/components";
import type { MglEvent } from "@/lib/types";

export type MapEventHandler = (e: any) => void;

export class MapLib {
  static readonly MAP_EVENT_TYPES = [
    "error",
    "load",
    "idle",
    "remove",
    "render",
    "resize",
    "webglcontextlost",
    "webglcontextrestored",
    "dataloading",
    "data",
    "tiledataloading",
    "sourcedataloading",
    "styledataloading",
    "sourcedata",
    "styledata",
    "boxzoomcancel",
    "boxzoomstart",
    "boxzoomend",
    "touchcancel",
    "touchmove",
    "touchend",
    "touchstart",
    "click",
    "contextmenu",
    "dblclick",
    "mousemove",
    "mouseup",
    "mousedown",
    "mouseout",
    "mouseover",
    "movestart",
    "move",
    "moveend",
    "zoomstart",
    "zoom",
    "zoomend",
    "rotatestart",
    "rotate",
    "rotateend",
    "dragstart",
    "drag",
    "dragend",
    "pitchstart",
    "pitch",
    "pitchend",
    "wheel",
  ];

  static createEventHandler(
    component: InstanceType<typeof MglMap>,
    map: Map,
    ctx: {
      emit: (t: string, payload: any) => void;
    },
    eventName: string,
  ): MapEventHandler {
    return (payload = {}) =>
      ctx.emit(eventName, {
        type: payload.type,
        map,
        component,
        event: payload,
      } as MglEvent);
  }
}
