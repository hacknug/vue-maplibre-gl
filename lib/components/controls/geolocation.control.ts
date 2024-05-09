import { defineComponent, type PropType } from "vue";
import { type FitBoundsOptions, GeolocateControl } from "maplibre-gl";
import {
  Position,
  type PositionProp,
  PositionValues,
} from "@/lib/components/controls/position.enum";
import { useControl } from "@/lib/composable/useControl";

/**
 * Render GeolocateControl
 *
 * See [GeolocateControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/GeolocateControl/)
 */
export default defineComponent({
  name: "MglGeolocateControl",
  props: {
    /**
     * Position on the map to which the control will be added. Valid values are 'top-left', 'top-right', 'bottom-left', and 'bottom-right'. Defaults to 'top-right'.
     */
    position: {
      type: String as PropType<PositionProp>,
      default: Position.TOP_RIGHT,
      validator: (v: Position) => {
        return PositionValues.indexOf(v) !== -1;
      },
    },
    positionOptions: {
      type: Object as PropType<PositionOptions>,
      default: () =>
        ({ enableHighAccuracy: false, timeout: 6000 }) as PositionOptions,
    },
    fitBoundsOptions: {
      type: Object as PropType<FitBoundsOptions>,
      default: () => ({ maxZoom: 15 }) as FitBoundsOptions,
    },
    trackUserLocation: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    showAccuracyCircle: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    showUserLocation: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props) {
    useControl(() => {
      return new GeolocateControl({
        positionOptions: props.positionOptions,
        fitBoundsOptions: props.fitBoundsOptions,
        trackUserLocation: props.trackUserLocation,
        showAccuracyCircle: props.showAccuracyCircle,
        showUserLocation: props.showUserLocation,
      });
    }, props);
  },
  render() {
    return null;
  },
});
