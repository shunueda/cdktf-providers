import * as cdktf from 'cdktf';
import { DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAppend,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAppendToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAppendToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAppendList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAspectCrop,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAspectCropToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAspectCropToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAspectCropList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBackgroundColor,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBackgroundColorToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBackgroundColorToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBackgroundColorList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBlur,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBlurToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBlurToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBlurList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareChromaKey,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareChromaKeyToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareChromaKeyToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareChromaKeyList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareComposite,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompositeToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompositeToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompositeList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompound,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompoundToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompoundToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompoundList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareContrast,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareContrastToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareContrastToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareContrastList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCrop,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCropToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCropToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCropList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFaceCrop,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFaceCropToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFaceCropToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFaceCropList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFeatureCrop,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFeatureCropToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFeatureCropToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFeatureCropList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFitAndFill,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFitAndFillToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFitAndFillToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFitAndFillList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGoop,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGoopToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGoopToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGoopList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationPortrait,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationPortraitToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationPortraitToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationPortraitOutputReference } from './structs16800'
import { DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGrayscale,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGrayscaleToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGrayscaleToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGrayscaleList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsl,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHslToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHslToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHslList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsv,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsvToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsvToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsvList } from './structs17200'
import { DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareIfDimension,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareIfDimensionToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareIfDimensionToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareIfDimensionList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareImQuery,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareImQueryToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareImQueryToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareImQueryList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMaxColors,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMaxColorsToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMaxColorsToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMaxColorsList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMirror,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMirrorToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMirrorToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMirrorList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMonoHue,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMonoHueToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMonoHueToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMonoHueList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOpacity,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOpacityToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOpacityToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOpacityList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRegionOfInterestCrop,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRegionOfInterestCropToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRegionOfInterestCropToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRegionOfInterestCropList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRelativeCrop,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRelativeCropToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRelativeCropToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRelativeCropList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRemoveColor,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRemoveColorToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRemoveColorToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRemoveColorList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareResize,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareResizeToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareResizeToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareResizeList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRotate,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRotateToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRotateToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRotateList,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareScale,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareScaleToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareScaleToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareScaleList } from './structs17600'
import { DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationDefault,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationDefaultToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationDefaultToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationDefaultOutputReference } from './structs14400'
import { DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationLandscape,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationLandscapeToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationLandscapeToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationLandscapeOutputReference } from './structs15600'
import { DataAkamaiImagingPolicyImagePolicyTransformationsAppend,
dataAkamaiImagingPolicyImagePolicyTransformationsAppendToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsAppendToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsAppendList,
DataAkamaiImagingPolicyImagePolicyTransformationsAspectCrop,
dataAkamaiImagingPolicyImagePolicyTransformationsAspectCropToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsAspectCropToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsAspectCropList,
DataAkamaiImagingPolicyImagePolicyTransformationsBackgroundColor,
dataAkamaiImagingPolicyImagePolicyTransformationsBackgroundColorToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsBackgroundColorToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsBackgroundColorList,
DataAkamaiImagingPolicyImagePolicyTransformationsBlur,
dataAkamaiImagingPolicyImagePolicyTransformationsBlurToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsBlurToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsBlurList,
DataAkamaiImagingPolicyImagePolicyTransformationsChromaKey,
dataAkamaiImagingPolicyImagePolicyTransformationsChromaKeyToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsChromaKeyToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsChromaKeyList } from './structs6800'
import { DataAkamaiImagingPolicyImagePolicyTransformationsComposite,
dataAkamaiImagingPolicyImagePolicyTransformationsCompositeToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsCompositeToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsCompositeList,
DataAkamaiImagingPolicyImagePolicyTransformationsCompound,
dataAkamaiImagingPolicyImagePolicyTransformationsCompoundToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsCompoundToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsCompoundList,
DataAkamaiImagingPolicyImagePolicyTransformationsContrast,
dataAkamaiImagingPolicyImagePolicyTransformationsContrastToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsContrastToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsContrastList,
DataAkamaiImagingPolicyImagePolicyTransformationsCrop,
dataAkamaiImagingPolicyImagePolicyTransformationsCropToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsCropToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsCropList,
DataAkamaiImagingPolicyImagePolicyTransformationsFaceCrop,
dataAkamaiImagingPolicyImagePolicyTransformationsFaceCropToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsFaceCropToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsFaceCropList,
DataAkamaiImagingPolicyImagePolicyTransformationsFeatureCrop,
dataAkamaiImagingPolicyImagePolicyTransformationsFeatureCropToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsFeatureCropToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsFeatureCropList } from './structs7600'
import { DataAkamaiImagingPolicyImagePolicyTransformationsFitAndFill,
dataAkamaiImagingPolicyImagePolicyTransformationsFitAndFillToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsFitAndFillToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsFitAndFillList,
DataAkamaiImagingPolicyImagePolicyTransformationsGoop,
dataAkamaiImagingPolicyImagePolicyTransformationsGoopToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsGoopToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsGoopList,
DataAkamaiImagingPolicyImagePolicyTransformationsGrayscale,
dataAkamaiImagingPolicyImagePolicyTransformationsGrayscaleToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsGrayscaleToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsGrayscaleList,
DataAkamaiImagingPolicyImagePolicyTransformationsHsl,
dataAkamaiImagingPolicyImagePolicyTransformationsHslToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsHslToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsHslList,
DataAkamaiImagingPolicyImagePolicyTransformationsHsv,
dataAkamaiImagingPolicyImagePolicyTransformationsHsvToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsHsvToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsHsvList } from './structs9200'
import { DataAkamaiImagingPolicyImagePolicyTransformationsIfDimension,
dataAkamaiImagingPolicyImagePolicyTransformationsIfDimensionToTerraform,
dataAkamaiImagingPolicyImagePolicyTransformationsIfDimensionToHclTerraform,
DataAkamaiImagingPolicyImagePolicyTransformationsIfDimensionList } from './structs13600'
import { DataAkamaiImagingPolicyImagePolicyBreakpoints,
dataAkamaiImagingPolicyImagePolicyBreakpointsToTerraform,
dataAkamaiImagingPolicyImagePolicyBreakpointsToHclTerraform,
DataAkamaiImagingPolicyImagePolicyBreakpointsOutputReference,
DataAkamaiImagingPolicyImagePolicyOutput,
dataAkamaiImagingPolicyImagePolicyOutputToTerraform,
dataAkamaiImagingPolicyImagePolicyOutputToHclTerraform,
DataAkamaiImagingPolicyImagePolicyOutputOutputReference } from './structs0'
import { DataAkamaiImagingPolicyImagePolicyPostBreakpointTransformations,
dataAkamaiImagingPolicyImagePolicyPostBreakpointTransformationsToTerraform,
dataAkamaiImagingPolicyImagePolicyPostBreakpointTransformationsToHclTerraform,
DataAkamaiImagingPolicyImagePolicyPostBreakpointTransformationsList } from './structs6000'
export interface DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShear {
  /**
  * The amount to shear along the x-axis, measured in multiples of the image's width. Must be set if yShear is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_shear DataAkamaiImagingPolicyImage#x_shear}
  */
  readonly xShear?: string;
  /**
  * The amount to shear along the x-axis, measured in multiples of the image's width. Must be set if yShear is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_shear_var DataAkamaiImagingPolicyImage#x_shear_var}
  */
  readonly xShearVar?: string;
  /**
  * The amount to shear along the y-axis, measured in multiples of the image's height. Must be set if xShear is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_shear DataAkamaiImagingPolicyImage#y_shear}
  */
  readonly yShear?: string;
  /**
  * The amount to shear along the y-axis, measured in multiples of the image's height. Must be set if xShear is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_shear_var DataAkamaiImagingPolicyImage#y_shear_var}
  */
  readonly yShearVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShearToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShear | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x_shear: cdktf.stringToTerraform(struct!.xShear),
    x_shear_var: cdktf.stringToTerraform(struct!.xShearVar),
    y_shear: cdktf.stringToTerraform(struct!.yShear),
    y_shear_var: cdktf.stringToTerraform(struct!.yShearVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShearToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShear | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x_shear: {
      value: cdktf.stringToHclTerraform(struct!.xShear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_shear_var: {
      value: cdktf.stringToHclTerraform(struct!.xShearVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_shear: {
      value: cdktf.stringToHclTerraform(struct!.yShear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_shear_var: {
      value: cdktf.stringToHclTerraform(struct!.yShearVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShearOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShear | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xShear !== undefined) {
      hasAnyValues = true;
      internalValueResult.xShear = this._xShear;
    }
    if (this._xShearVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.xShearVar = this._xShearVar;
    }
    if (this._yShear !== undefined) {
      hasAnyValues = true;
      internalValueResult.yShear = this._yShear;
    }
    if (this._yShearVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.yShearVar = this._yShearVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShear | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xShear = undefined;
      this._xShearVar = undefined;
      this._yShear = undefined;
      this._yShearVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xShear = value.xShear;
      this._xShearVar = value.xShearVar;
      this._yShear = value.yShear;
      this._yShearVar = value.yShearVar;
    }
  }

  // x_shear - computed: false, optional: true, required: false
  private _xShear?: string; 
  public get xShear() {
    return this.getStringAttribute('x_shear');
  }
  public set xShear(value: string) {
    this._xShear = value;
  }
  public resetXShear() {
    this._xShear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xShearInput() {
    return this._xShear;
  }

  // x_shear_var - computed: false, optional: true, required: false
  private _xShearVar?: string; 
  public get xShearVar() {
    return this.getStringAttribute('x_shear_var');
  }
  public set xShearVar(value: string) {
    this._xShearVar = value;
  }
  public resetXShearVar() {
    this._xShearVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xShearVarInput() {
    return this._xShearVar;
  }

  // y_shear - computed: false, optional: true, required: false
  private _yShear?: string; 
  public get yShear() {
    return this.getStringAttribute('y_shear');
  }
  public set yShear(value: string) {
    this._yShear = value;
  }
  public resetYShear() {
    this._yShear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yShearInput() {
    return this._yShear;
  }

  // y_shear_var - computed: false, optional: true, required: false
  private _yShearVar?: string; 
  public get yShearVar() {
    return this.getStringAttribute('y_shear_var');
  }
  public set yShearVar(value: string) {
    this._yShearVar = value;
  }
  public resetYShearVar() {
    this._yShearVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yShearVarInput() {
    return this._yShearVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShearList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShear[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShearOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShearOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCrop {
  /**
  * When enabled, the SmartCrop transformation doesn't actually execute. Instead, it outlines found faces or features, the region of interest, and the crop area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#debug DataAkamaiImagingPolicyImage#debug}
  */
  readonly debug?: string;
  /**
  * When enabled, the SmartCrop transformation doesn't actually execute. Instead, it outlines found faces or features, the region of interest, and the crop area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#debug_var DataAkamaiImagingPolicyImage#debug_var}
  */
  readonly debugVar?: string;
  /**
  * The height in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height DataAkamaiImagingPolicyImage#height}
  */
  readonly height?: string;
  /**
  * The height in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height_var DataAkamaiImagingPolicyImage#height_var}
  */
  readonly heightVar?: string;
  /**
  * Whether to sacrifice any image fidelity for transformation performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#sloppy DataAkamaiImagingPolicyImage#sloppy}
  */
  readonly sloppy?: string;
  /**
  * Whether to sacrifice any image fidelity for transformation performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#sloppy_var DataAkamaiImagingPolicyImage#sloppy_var}
  */
  readonly sloppyVar?: string;
  /**
  * Specifies how to crop or scale a crop area for the specified area of interest in the source image, `fill` by default. The output image resizes to the specified `width` and `height` values. A value of `crop` places raw crop around the point of interest.  A value of `fill` scales the crop area to include as much of the image and point of interest as possible, relative to the specified `width` and `height` values. A value of `zoom` scales the crop area as small as possible to fit the point of interest, relative to the specified `width` and `height` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#style DataAkamaiImagingPolicyImage#style}
  */
  readonly style?: string;
  /**
  * Specifies how to crop or scale a crop area for the specified area of interest in the source image, `fill` by default. The output image resizes to the specified `width` and `height` values. A value of `crop` places raw crop around the point of interest.  A value of `fill` scales the crop area to include as much of the image and point of interest as possible, relative to the specified `width` and `height` values. A value of `zoom` scales the crop area as small as possible to fit the point of interest, relative to the specified `width` and `height` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#style_var DataAkamaiImagingPolicyImage#style_var}
  */
  readonly styleVar?: string;
  /**
  * The width in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width DataAkamaiImagingPolicyImage#width}
  */
  readonly width?: string;
  /**
  * The width in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width_var DataAkamaiImagingPolicyImage#width_var}
  */
  readonly widthVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCropToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: cdktf.stringToTerraform(struct!.debug),
    debug_var: cdktf.stringToTerraform(struct!.debugVar),
    height: cdktf.stringToTerraform(struct!.height),
    height_var: cdktf.stringToTerraform(struct!.heightVar),
    sloppy: cdktf.stringToTerraform(struct!.sloppy),
    sloppy_var: cdktf.stringToTerraform(struct!.sloppyVar),
    style: cdktf.stringToTerraform(struct!.style),
    style_var: cdktf.stringToTerraform(struct!.styleVar),
    width: cdktf.stringToTerraform(struct!.width),
    width_var: cdktf.stringToTerraform(struct!.widthVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCropToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: cdktf.stringToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_var: {
      value: cdktf.stringToHclTerraform(struct!.debugVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height_var: {
      value: cdktf.stringToHclTerraform(struct!.heightVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sloppy: {
      value: cdktf.stringToHclTerraform(struct!.sloppy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sloppy_var: {
      value: cdktf.stringToHclTerraform(struct!.sloppyVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style: {
      value: cdktf.stringToHclTerraform(struct!.style),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style_var: {
      value: cdktf.stringToHclTerraform(struct!.styleVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width_var: {
      value: cdktf.stringToHclTerraform(struct!.widthVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._debugVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugVar = this._debugVar;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._heightVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.heightVar = this._heightVar;
    }
    if (this._sloppy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloppy = this._sloppy;
    }
    if (this._sloppyVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloppyVar = this._sloppyVar;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._styleVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.styleVar = this._styleVar;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._widthVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.widthVar = this._widthVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCrop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debug = undefined;
      this._debugVar = undefined;
      this._height = undefined;
      this._heightVar = undefined;
      this._sloppy = undefined;
      this._sloppyVar = undefined;
      this._style = undefined;
      this._styleVar = undefined;
      this._width = undefined;
      this._widthVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debug = value.debug;
      this._debugVar = value.debugVar;
      this._height = value.height;
      this._heightVar = value.heightVar;
      this._sloppy = value.sloppy;
      this._sloppyVar = value.sloppyVar;
      this._style = value.style;
      this._styleVar = value.styleVar;
      this._width = value.width;
      this._widthVar = value.widthVar;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: string; 
  public get debug() {
    return this.getStringAttribute('debug');
  }
  public set debug(value: string) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // debug_var - computed: false, optional: true, required: false
  private _debugVar?: string; 
  public get debugVar() {
    return this.getStringAttribute('debug_var');
  }
  public set debugVar(value: string) {
    this._debugVar = value;
  }
  public resetDebugVar() {
    this._debugVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugVarInput() {
    return this._debugVar;
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // height_var - computed: false, optional: true, required: false
  private _heightVar?: string; 
  public get heightVar() {
    return this.getStringAttribute('height_var');
  }
  public set heightVar(value: string) {
    this._heightVar = value;
  }
  public resetHeightVar() {
    this._heightVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightVarInput() {
    return this._heightVar;
  }

  // sloppy - computed: false, optional: true, required: false
  private _sloppy?: string; 
  public get sloppy() {
    return this.getStringAttribute('sloppy');
  }
  public set sloppy(value: string) {
    this._sloppy = value;
  }
  public resetSloppy() {
    this._sloppy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloppyInput() {
    return this._sloppy;
  }

  // sloppy_var - computed: false, optional: true, required: false
  private _sloppyVar?: string; 
  public get sloppyVar() {
    return this.getStringAttribute('sloppy_var');
  }
  public set sloppyVar(value: string) {
    this._sloppyVar = value;
  }
  public resetSloppyVar() {
    this._sloppyVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloppyVarInput() {
    return this._sloppyVar;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // style_var - computed: false, optional: true, required: false
  private _styleVar?: string; 
  public get styleVar() {
    return this.getStringAttribute('style_var');
  }
  public set styleVar(value: string) {
    this._styleVar = value;
  }
  public resetStyleVar() {
    this._styleVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleVarInput() {
    return this._styleVar;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // width_var - computed: false, optional: true, required: false
  private _widthVar?: string; 
  public get widthVar() {
    return this.getStringAttribute('width_var');
  }
  public set widthVar(value: string) {
    this._widthVar = value;
  }
  public resetWidthVar() {
    this._widthVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthVarInput() {
    return this._widthVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCropList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCrop[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCropOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCropOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrim {
  /**
  * The fuzz tolerance of the trim, a value between `0` and `1` that determines the acceptable amount of background variation before trimming stops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#fuzz DataAkamaiImagingPolicyImage#fuzz}
  */
  readonly fuzz?: string;
  /**
  * The fuzz tolerance of the trim, a value between `0` and `1` that determines the acceptable amount of background variation before trimming stops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#fuzz_var DataAkamaiImagingPolicyImage#fuzz_var}
  */
  readonly fuzzVar?: string;
  /**
  * The amount of padding in pixels to add to the trimmed image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#padding DataAkamaiImagingPolicyImage#padding}
  */
  readonly padding?: string;
  /**
  * The amount of padding in pixels to add to the trimmed image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#padding_var DataAkamaiImagingPolicyImage#padding_var}
  */
  readonly paddingVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrimToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fuzz: cdktf.stringToTerraform(struct!.fuzz),
    fuzz_var: cdktf.stringToTerraform(struct!.fuzzVar),
    padding: cdktf.stringToTerraform(struct!.padding),
    padding_var: cdktf.stringToTerraform(struct!.paddingVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrimToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fuzz: {
      value: cdktf.stringToHclTerraform(struct!.fuzz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fuzz_var: {
      value: cdktf.stringToHclTerraform(struct!.fuzzVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktf.stringToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding_var: {
      value: cdktf.stringToHclTerraform(struct!.paddingVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fuzz !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuzz = this._fuzz;
    }
    if (this._fuzzVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuzzVar = this._fuzzVar;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._paddingVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.paddingVar = this._paddingVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fuzz = undefined;
      this._fuzzVar = undefined;
      this._padding = undefined;
      this._paddingVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fuzz = value.fuzz;
      this._fuzzVar = value.fuzzVar;
      this._padding = value.padding;
      this._paddingVar = value.paddingVar;
    }
  }

  // fuzz - computed: false, optional: true, required: false
  private _fuzz?: string; 
  public get fuzz() {
    return this.getStringAttribute('fuzz');
  }
  public set fuzz(value: string) {
    this._fuzz = value;
  }
  public resetFuzz() {
    this._fuzz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuzzInput() {
    return this._fuzz;
  }

  // fuzz_var - computed: false, optional: true, required: false
  private _fuzzVar?: string; 
  public get fuzzVar() {
    return this.getStringAttribute('fuzz_var');
  }
  public set fuzzVar(value: string) {
    this._fuzzVar = value;
  }
  public resetFuzzVar() {
    this._fuzzVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuzzVarInput() {
    return this._fuzzVar;
  }

  // padding - computed: false, optional: true, required: false
  private _padding?: string; 
  public get padding() {
    return this.getStringAttribute('padding');
  }
  public set padding(value: string) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // padding_var - computed: false, optional: true, required: false
  private _paddingVar?: string; 
  public get paddingVar() {
    return this.getStringAttribute('padding_var');
  }
  public set paddingVar(value: string) {
    this._paddingVar = value;
  }
  public resetPaddingVar() {
    this._paddingVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingVarInput() {
    return this._paddingVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrimList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrim[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrimOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMask {
  /**
  * Set how much emphasis the filter applies to details. Higher values increase apparent sharpness of details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#gain DataAkamaiImagingPolicyImage#gain}
  */
  readonly gain?: string;
  /**
  * Set how much emphasis the filter applies to details. Higher values increase apparent sharpness of details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#gain_var DataAkamaiImagingPolicyImage#gain_var}
  */
  readonly gainVar?: string;
  /**
  * The standard deviation of the Gaussian distribution used in the in unsharp mask, measured in pixels, `1.0` by default. High values emphasize large details and low values emphasize small details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#sigma DataAkamaiImagingPolicyImage#sigma}
  */
  readonly sigma?: string;
  /**
  * The standard deviation of the Gaussian distribution used in the in unsharp mask, measured in pixels, `1.0` by default. High values emphasize large details and low values emphasize small details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#sigma_var DataAkamaiImagingPolicyImage#sigma_var}
  */
  readonly sigmaVar?: string;
  /**
  * Set the minimum change required to include a detail in the filter. Higher values discard more changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#threshold DataAkamaiImagingPolicyImage#threshold}
  */
  readonly threshold?: string;
  /**
  * Set the minimum change required to include a detail in the filter. Higher values discard more changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#threshold_var DataAkamaiImagingPolicyImage#threshold_var}
  */
  readonly thresholdVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMaskToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gain: cdktf.stringToTerraform(struct!.gain),
    gain_var: cdktf.stringToTerraform(struct!.gainVar),
    sigma: cdktf.stringToTerraform(struct!.sigma),
    sigma_var: cdktf.stringToTerraform(struct!.sigmaVar),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    threshold_var: cdktf.stringToTerraform(struct!.thresholdVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMaskToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gain: {
      value: cdktf.stringToHclTerraform(struct!.gain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gain_var: {
      value: cdktf.stringToHclTerraform(struct!.gainVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sigma: {
      value: cdktf.stringToHclTerraform(struct!.sigma),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sigma_var: {
      value: cdktf.stringToHclTerraform(struct!.sigmaVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_var: {
      value: cdktf.stringToHclTerraform(struct!.thresholdVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gain !== undefined) {
      hasAnyValues = true;
      internalValueResult.gain = this._gain;
    }
    if (this._gainVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.gainVar = this._gainVar;
    }
    if (this._sigma !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigma = this._sigma;
    }
    if (this._sigmaVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigmaVar = this._sigmaVar;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdVar = this._thresholdVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gain = undefined;
      this._gainVar = undefined;
      this._sigma = undefined;
      this._sigmaVar = undefined;
      this._threshold = undefined;
      this._thresholdVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gain = value.gain;
      this._gainVar = value.gainVar;
      this._sigma = value.sigma;
      this._sigmaVar = value.sigmaVar;
      this._threshold = value.threshold;
      this._thresholdVar = value.thresholdVar;
    }
  }

  // gain - computed: false, optional: true, required: false
  private _gain?: string; 
  public get gain() {
    return this.getStringAttribute('gain');
  }
  public set gain(value: string) {
    this._gain = value;
  }
  public resetGain() {
    this._gain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gainInput() {
    return this._gain;
  }

  // gain_var - computed: false, optional: true, required: false
  private _gainVar?: string; 
  public get gainVar() {
    return this.getStringAttribute('gain_var');
  }
  public set gainVar(value: string) {
    this._gainVar = value;
  }
  public resetGainVar() {
    this._gainVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gainVarInput() {
    return this._gainVar;
  }

  // sigma - computed: false, optional: true, required: false
  private _sigma?: string; 
  public get sigma() {
    return this.getStringAttribute('sigma');
  }
  public set sigma(value: string) {
    this._sigma = value;
  }
  public resetSigma() {
    this._sigma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigmaInput() {
    return this._sigma;
  }

  // sigma_var - computed: false, optional: true, required: false
  private _sigmaVar?: string; 
  public get sigmaVar() {
    return this.getStringAttribute('sigma_var');
  }
  public set sigmaVar(value: string) {
    this._sigmaVar = value;
  }
  public resetSigmaVar() {
    this._sigmaVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigmaVarInput() {
    return this._sigmaVar;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_var - computed: false, optional: true, required: false
  private _thresholdVar?: string; 
  public get thresholdVar() {
    return this.getStringAttribute('threshold_var');
  }
  public set thresholdVar(value: string) {
    this._thresholdVar = value;
  }
  public resetThresholdVar() {
    this._thresholdVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdVarInput() {
    return this._thresholdVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMaskList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMask[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMaskOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquare {
  /**
  * append block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#append DataAkamaiImagingPolicyImage#append}
  */
  readonly append?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAppend[] | cdktf.IResolvable;
  /**
  * aspect_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#aspect_crop DataAkamaiImagingPolicyImage#aspect_crop}
  */
  readonly aspectCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAspectCrop[] | cdktf.IResolvable;
  /**
  * background_color block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#background_color DataAkamaiImagingPolicyImage#background_color}
  */
  readonly backgroundColor?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBackgroundColor[] | cdktf.IResolvable;
  /**
  * blur block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#blur DataAkamaiImagingPolicyImage#blur}
  */
  readonly blur?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBlur[] | cdktf.IResolvable;
  /**
  * chroma_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#chroma_key DataAkamaiImagingPolicyImage#chroma_key}
  */
  readonly chromaKey?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareChromaKey[] | cdktf.IResolvable;
  /**
  * composite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#composite DataAkamaiImagingPolicyImage#composite}
  */
  readonly composite?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareComposite[] | cdktf.IResolvable;
  /**
  * compound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#compound DataAkamaiImagingPolicyImage#compound}
  */
  readonly compound?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompound[] | cdktf.IResolvable;
  /**
  * contrast block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#contrast DataAkamaiImagingPolicyImage#contrast}
  */
  readonly contrast?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareContrast[] | cdktf.IResolvable;
  /**
  * crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#crop DataAkamaiImagingPolicyImage#crop}
  */
  readonly crop?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCrop[] | cdktf.IResolvable;
  /**
  * face_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#face_crop DataAkamaiImagingPolicyImage#face_crop}
  */
  readonly faceCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFaceCrop[] | cdktf.IResolvable;
  /**
  * feature_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#feature_crop DataAkamaiImagingPolicyImage#feature_crop}
  */
  readonly featureCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFeatureCrop[] | cdktf.IResolvable;
  /**
  * fit_and_fill block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#fit_and_fill DataAkamaiImagingPolicyImage#fit_and_fill}
  */
  readonly fitAndFill?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFitAndFill[] | cdktf.IResolvable;
  /**
  * goop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#goop DataAkamaiImagingPolicyImage#goop}
  */
  readonly goop?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGoop[] | cdktf.IResolvable;
  /**
  * grayscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#grayscale DataAkamaiImagingPolicyImage#grayscale}
  */
  readonly grayscale?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGrayscale[] | cdktf.IResolvable;
  /**
  * hsl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#hsl DataAkamaiImagingPolicyImage#hsl}
  */
  readonly hsl?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsl[] | cdktf.IResolvable;
  /**
  * hsv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#hsv DataAkamaiImagingPolicyImage#hsv}
  */
  readonly hsv?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsv[] | cdktf.IResolvable;
  /**
  * if_dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#if_dimension DataAkamaiImagingPolicyImage#if_dimension}
  */
  readonly ifDimension?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareIfDimension[] | cdktf.IResolvable;
  /**
  * if_orientation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#if_orientation DataAkamaiImagingPolicyImage#if_orientation}
  */
  readonly ifOrientation?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientation[] | cdktf.IResolvable;
  /**
  * im_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#im_query DataAkamaiImagingPolicyImage#im_query}
  */
  readonly imQuery?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareImQuery[] | cdktf.IResolvable;
  /**
  * max_colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#max_colors DataAkamaiImagingPolicyImage#max_colors}
  */
  readonly maxColors?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMaxColors[] | cdktf.IResolvable;
  /**
  * mirror block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#mirror DataAkamaiImagingPolicyImage#mirror}
  */
  readonly mirror?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMirror[] | cdktf.IResolvable;
  /**
  * mono_hue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#mono_hue DataAkamaiImagingPolicyImage#mono_hue}
  */
  readonly monoHue?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMonoHue[] | cdktf.IResolvable;
  /**
  * opacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#opacity DataAkamaiImagingPolicyImage#opacity}
  */
  readonly opacity?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOpacity[] | cdktf.IResolvable;
  /**
  * region_of_interest_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#region_of_interest_crop DataAkamaiImagingPolicyImage#region_of_interest_crop}
  */
  readonly regionOfInterestCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRegionOfInterestCrop[] | cdktf.IResolvable;
  /**
  * relative_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#relative_crop DataAkamaiImagingPolicyImage#relative_crop}
  */
  readonly relativeCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRelativeCrop[] | cdktf.IResolvable;
  /**
  * remove_color block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#remove_color DataAkamaiImagingPolicyImage#remove_color}
  */
  readonly removeColor?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRemoveColor[] | cdktf.IResolvable;
  /**
  * resize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#resize DataAkamaiImagingPolicyImage#resize}
  */
  readonly resize?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareResize[] | cdktf.IResolvable;
  /**
  * rotate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#rotate DataAkamaiImagingPolicyImage#rotate}
  */
  readonly rotate?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRotate[] | cdktf.IResolvable;
  /**
  * scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#scale DataAkamaiImagingPolicyImage#scale}
  */
  readonly scale?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareScale[] | cdktf.IResolvable;
  /**
  * shear block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#shear DataAkamaiImagingPolicyImage#shear}
  */
  readonly shear?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShear[] | cdktf.IResolvable;
  /**
  * smart_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#smart_crop DataAkamaiImagingPolicyImage#smart_crop}
  */
  readonly smartCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCrop[] | cdktf.IResolvable;
  /**
  * trim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#trim DataAkamaiImagingPolicyImage#trim}
  */
  readonly trim?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrim[] | cdktf.IResolvable;
  /**
  * unsharp_mask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#unsharp_mask DataAkamaiImagingPolicyImage#unsharp_mask}
  */
  readonly unsharpMask?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMask[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquare): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAppendToTerraform, true)(struct!.append),
    aspect_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAspectCropToTerraform, true)(struct!.aspectCrop),
    background_color: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBackgroundColorToTerraform, true)(struct!.backgroundColor),
    blur: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBlurToTerraform, true)(struct!.blur),
    chroma_key: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareChromaKeyToTerraform, true)(struct!.chromaKey),
    composite: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompositeToTerraform, true)(struct!.composite),
    compound: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompoundToTerraform, true)(struct!.compound),
    contrast: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareContrastToTerraform, true)(struct!.contrast),
    crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCropToTerraform, true)(struct!.crop),
    face_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFaceCropToTerraform, true)(struct!.faceCrop),
    feature_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFeatureCropToTerraform, true)(struct!.featureCrop),
    fit_and_fill: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFitAndFillToTerraform, true)(struct!.fitAndFill),
    goop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGoopToTerraform, true)(struct!.goop),
    grayscale: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGrayscaleToTerraform, true)(struct!.grayscale),
    hsl: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHslToTerraform, true)(struct!.hsl),
    hsv: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsvToTerraform, true)(struct!.hsv),
    if_dimension: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareIfDimensionToTerraform, true)(struct!.ifDimension),
    if_orientation: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationToTerraform, true)(struct!.ifOrientation),
    im_query: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareImQueryToTerraform, true)(struct!.imQuery),
    max_colors: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMaxColorsToTerraform, true)(struct!.maxColors),
    mirror: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMirrorToTerraform, true)(struct!.mirror),
    mono_hue: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMonoHueToTerraform, true)(struct!.monoHue),
    opacity: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOpacityToTerraform, true)(struct!.opacity),
    region_of_interest_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRegionOfInterestCropToTerraform, true)(struct!.regionOfInterestCrop),
    relative_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRelativeCropToTerraform, true)(struct!.relativeCrop),
    remove_color: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRemoveColorToTerraform, true)(struct!.removeColor),
    resize: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareResizeToTerraform, true)(struct!.resize),
    rotate: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRotateToTerraform, true)(struct!.rotate),
    scale: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareScaleToTerraform, true)(struct!.scale),
    shear: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShearToTerraform, true)(struct!.shear),
    smart_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCropToTerraform, true)(struct!.smartCrop),
    trim: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrimToTerraform, true)(struct!.trim),
    unsharp_mask: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMaskToTerraform, true)(struct!.unsharpMask),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquare): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAppendToHclTerraform, true)(struct!.append),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAppendList",
    },
    aspect_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAspectCropToHclTerraform, true)(struct!.aspectCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAspectCropList",
    },
    background_color: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBackgroundColorToHclTerraform, true)(struct!.backgroundColor),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBackgroundColorList",
    },
    blur: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBlurToHclTerraform, true)(struct!.blur),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBlurList",
    },
    chroma_key: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareChromaKeyToHclTerraform, true)(struct!.chromaKey),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareChromaKeyList",
    },
    composite: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompositeToHclTerraform, true)(struct!.composite),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompositeList",
    },
    compound: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompoundToHclTerraform, true)(struct!.compound),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompoundList",
    },
    contrast: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareContrastToHclTerraform, true)(struct!.contrast),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareContrastList",
    },
    crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCropToHclTerraform, true)(struct!.crop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCropList",
    },
    face_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFaceCropToHclTerraform, true)(struct!.faceCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFaceCropList",
    },
    feature_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFeatureCropToHclTerraform, true)(struct!.featureCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFeatureCropList",
    },
    fit_and_fill: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFitAndFillToHclTerraform, true)(struct!.fitAndFill),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFitAndFillList",
    },
    goop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGoopToHclTerraform, true)(struct!.goop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGoopList",
    },
    grayscale: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGrayscaleToHclTerraform, true)(struct!.grayscale),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGrayscaleList",
    },
    hsl: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHslToHclTerraform, true)(struct!.hsl),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHslList",
    },
    hsv: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsvToHclTerraform, true)(struct!.hsv),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsvList",
    },
    if_dimension: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareIfDimensionToHclTerraform, true)(struct!.ifDimension),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareIfDimensionList",
    },
    if_orientation: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationToHclTerraform, true)(struct!.ifOrientation),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationList",
    },
    im_query: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareImQueryToHclTerraform, true)(struct!.imQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareImQueryList",
    },
    max_colors: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMaxColorsToHclTerraform, true)(struct!.maxColors),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMaxColorsList",
    },
    mirror: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMirrorToHclTerraform, true)(struct!.mirror),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMirrorList",
    },
    mono_hue: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMonoHueToHclTerraform, true)(struct!.monoHue),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMonoHueList",
    },
    opacity: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOpacityToHclTerraform, true)(struct!.opacity),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOpacityList",
    },
    region_of_interest_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRegionOfInterestCropToHclTerraform, true)(struct!.regionOfInterestCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRegionOfInterestCropList",
    },
    relative_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRelativeCropToHclTerraform, true)(struct!.relativeCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRelativeCropList",
    },
    remove_color: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRemoveColorToHclTerraform, true)(struct!.removeColor),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRemoveColorList",
    },
    resize: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareResizeToHclTerraform, true)(struct!.resize),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareResizeList",
    },
    rotate: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRotateToHclTerraform, true)(struct!.rotate),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRotateList",
    },
    scale: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareScaleToHclTerraform, true)(struct!.scale),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareScaleList",
    },
    shear: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShearToHclTerraform, true)(struct!.shear),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShearList",
    },
    smart_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCropToHclTerraform, true)(struct!.smartCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCropList",
    },
    trim: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrimToHclTerraform, true)(struct!.trim),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrimList",
    },
    unsharp_mask: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMaskToHclTerraform, true)(struct!.unsharpMask),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquare | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append?.internalValue;
    }
    if (this._aspectCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspectCrop = this._aspectCrop?.internalValue;
    }
    if (this._backgroundColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor?.internalValue;
    }
    if (this._blur?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blur = this._blur?.internalValue;
    }
    if (this._chromaKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chromaKey = this._chromaKey?.internalValue;
    }
    if (this._composite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite?.internalValue;
    }
    if (this._compound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compound = this._compound?.internalValue;
    }
    if (this._contrast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contrast = this._contrast?.internalValue;
    }
    if (this._crop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crop = this._crop?.internalValue;
    }
    if (this._faceCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceCrop = this._faceCrop?.internalValue;
    }
    if (this._featureCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureCrop = this._featureCrop?.internalValue;
    }
    if (this._fitAndFill?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fitAndFill = this._fitAndFill?.internalValue;
    }
    if (this._goop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goop = this._goop?.internalValue;
    }
    if (this._grayscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grayscale = this._grayscale?.internalValue;
    }
    if (this._hsl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsl = this._hsl?.internalValue;
    }
    if (this._hsv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsv = this._hsv?.internalValue;
    }
    if (this._ifDimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifDimension = this._ifDimension?.internalValue;
    }
    if (this._ifOrientation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifOrientation = this._ifOrientation?.internalValue;
    }
    if (this._imQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imQuery = this._imQuery?.internalValue;
    }
    if (this._maxColors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxColors = this._maxColors?.internalValue;
    }
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    if (this._monoHue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monoHue = this._monoHue?.internalValue;
    }
    if (this._opacity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacity = this._opacity?.internalValue;
    }
    if (this._regionOfInterestCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionOfInterestCrop = this._regionOfInterestCrop?.internalValue;
    }
    if (this._relativeCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeCrop = this._relativeCrop?.internalValue;
    }
    if (this._removeColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeColor = this._removeColor?.internalValue;
    }
    if (this._resize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resize = this._resize?.internalValue;
    }
    if (this._rotate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotate = this._rotate?.internalValue;
    }
    if (this._scale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale?.internalValue;
    }
    if (this._shear?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shear = this._shear?.internalValue;
    }
    if (this._smartCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartCrop = this._smartCrop?.internalValue;
    }
    if (this._trim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trim = this._trim?.internalValue;
    }
    if (this._unsharpMask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsharpMask = this._unsharpMask?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquare | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._append.internalValue = undefined;
      this._aspectCrop.internalValue = undefined;
      this._backgroundColor.internalValue = undefined;
      this._blur.internalValue = undefined;
      this._chromaKey.internalValue = undefined;
      this._composite.internalValue = undefined;
      this._compound.internalValue = undefined;
      this._contrast.internalValue = undefined;
      this._crop.internalValue = undefined;
      this._faceCrop.internalValue = undefined;
      this._featureCrop.internalValue = undefined;
      this._fitAndFill.internalValue = undefined;
      this._goop.internalValue = undefined;
      this._grayscale.internalValue = undefined;
      this._hsl.internalValue = undefined;
      this._hsv.internalValue = undefined;
      this._ifDimension.internalValue = undefined;
      this._ifOrientation.internalValue = undefined;
      this._imQuery.internalValue = undefined;
      this._maxColors.internalValue = undefined;
      this._mirror.internalValue = undefined;
      this._monoHue.internalValue = undefined;
      this._opacity.internalValue = undefined;
      this._regionOfInterestCrop.internalValue = undefined;
      this._relativeCrop.internalValue = undefined;
      this._removeColor.internalValue = undefined;
      this._resize.internalValue = undefined;
      this._rotate.internalValue = undefined;
      this._scale.internalValue = undefined;
      this._shear.internalValue = undefined;
      this._smartCrop.internalValue = undefined;
      this._trim.internalValue = undefined;
      this._unsharpMask.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._append.internalValue = value.append;
      this._aspectCrop.internalValue = value.aspectCrop;
      this._backgroundColor.internalValue = value.backgroundColor;
      this._blur.internalValue = value.blur;
      this._chromaKey.internalValue = value.chromaKey;
      this._composite.internalValue = value.composite;
      this._compound.internalValue = value.compound;
      this._contrast.internalValue = value.contrast;
      this._crop.internalValue = value.crop;
      this._faceCrop.internalValue = value.faceCrop;
      this._featureCrop.internalValue = value.featureCrop;
      this._fitAndFill.internalValue = value.fitAndFill;
      this._goop.internalValue = value.goop;
      this._grayscale.internalValue = value.grayscale;
      this._hsl.internalValue = value.hsl;
      this._hsv.internalValue = value.hsv;
      this._ifDimension.internalValue = value.ifDimension;
      this._ifOrientation.internalValue = value.ifOrientation;
      this._imQuery.internalValue = value.imQuery;
      this._maxColors.internalValue = value.maxColors;
      this._mirror.internalValue = value.mirror;
      this._monoHue.internalValue = value.monoHue;
      this._opacity.internalValue = value.opacity;
      this._regionOfInterestCrop.internalValue = value.regionOfInterestCrop;
      this._relativeCrop.internalValue = value.relativeCrop;
      this._removeColor.internalValue = value.removeColor;
      this._resize.internalValue = value.resize;
      this._rotate.internalValue = value.rotate;
      this._scale.internalValue = value.scale;
      this._shear.internalValue = value.shear;
      this._smartCrop.internalValue = value.smartCrop;
      this._trim.internalValue = value.trim;
      this._unsharpMask.internalValue = value.unsharpMask;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAppendList(this, "append", false);
  public get append() {
    return this._append;
  }
  public putAppend(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAppend[] | cdktf.IResolvable) {
    this._append.internalValue = value;
  }
  public resetAppend() {
    this._append.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append.internalValue;
  }

  // aspect_crop - computed: false, optional: true, required: false
  private _aspectCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAspectCropList(this, "aspect_crop", false);
  public get aspectCrop() {
    return this._aspectCrop;
  }
  public putAspectCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareAspectCrop[] | cdktf.IResolvable) {
    this._aspectCrop.internalValue = value;
  }
  public resetAspectCrop() {
    this._aspectCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectCropInput() {
    return this._aspectCrop.internalValue;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBackgroundColorList(this, "background_color", false);
  public get backgroundColor() {
    return this._backgroundColor;
  }
  public putBackgroundColor(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBackgroundColor[] | cdktf.IResolvable) {
    this._backgroundColor.internalValue = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor.internalValue;
  }

  // blur - computed: false, optional: true, required: false
  private _blur = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBlurList(this, "blur", false);
  public get blur() {
    return this._blur;
  }
  public putBlur(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareBlur[] | cdktf.IResolvable) {
    this._blur.internalValue = value;
  }
  public resetBlur() {
    this._blur.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blurInput() {
    return this._blur.internalValue;
  }

  // chroma_key - computed: false, optional: true, required: false
  private _chromaKey = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareChromaKeyList(this, "chroma_key", false);
  public get chromaKey() {
    return this._chromaKey;
  }
  public putChromaKey(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareChromaKey[] | cdktf.IResolvable) {
    this._chromaKey.internalValue = value;
  }
  public resetChromaKey() {
    this._chromaKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chromaKeyInput() {
    return this._chromaKey.internalValue;
  }

  // composite - computed: false, optional: true, required: false
  private _composite = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompositeList(this, "composite", false);
  public get composite() {
    return this._composite;
  }
  public putComposite(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareComposite[] | cdktf.IResolvable) {
    this._composite.internalValue = value;
  }
  public resetComposite() {
    this._composite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite.internalValue;
  }

  // compound - computed: false, optional: true, required: false
  private _compound = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompoundList(this, "compound", false);
  public get compound() {
    return this._compound;
  }
  public putCompound(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCompound[] | cdktf.IResolvable) {
    this._compound.internalValue = value;
  }
  public resetCompound() {
    this._compound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compoundInput() {
    return this._compound.internalValue;
  }

  // contrast - computed: false, optional: true, required: false
  private _contrast = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareContrastList(this, "contrast", false);
  public get contrast() {
    return this._contrast;
  }
  public putContrast(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareContrast[] | cdktf.IResolvable) {
    this._contrast.internalValue = value;
  }
  public resetContrast() {
    this._contrast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contrastInput() {
    return this._contrast.internalValue;
  }

  // crop - computed: false, optional: true, required: false
  private _crop = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCropList(this, "crop", false);
  public get crop() {
    return this._crop;
  }
  public putCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareCrop[] | cdktf.IResolvable) {
    this._crop.internalValue = value;
  }
  public resetCrop() {
    this._crop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cropInput() {
    return this._crop.internalValue;
  }

  // face_crop - computed: false, optional: true, required: false
  private _faceCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFaceCropList(this, "face_crop", false);
  public get faceCrop() {
    return this._faceCrop;
  }
  public putFaceCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFaceCrop[] | cdktf.IResolvable) {
    this._faceCrop.internalValue = value;
  }
  public resetFaceCrop() {
    this._faceCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceCropInput() {
    return this._faceCrop.internalValue;
  }

  // feature_crop - computed: false, optional: true, required: false
  private _featureCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFeatureCropList(this, "feature_crop", false);
  public get featureCrop() {
    return this._featureCrop;
  }
  public putFeatureCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFeatureCrop[] | cdktf.IResolvable) {
    this._featureCrop.internalValue = value;
  }
  public resetFeatureCrop() {
    this._featureCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureCropInput() {
    return this._featureCrop.internalValue;
  }

  // fit_and_fill - computed: false, optional: true, required: false
  private _fitAndFill = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFitAndFillList(this, "fit_and_fill", false);
  public get fitAndFill() {
    return this._fitAndFill;
  }
  public putFitAndFill(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareFitAndFill[] | cdktf.IResolvable) {
    this._fitAndFill.internalValue = value;
  }
  public resetFitAndFill() {
    this._fitAndFill.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fitAndFillInput() {
    return this._fitAndFill.internalValue;
  }

  // goop - computed: false, optional: true, required: false
  private _goop = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGoopList(this, "goop", false);
  public get goop() {
    return this._goop;
  }
  public putGoop(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGoop[] | cdktf.IResolvable) {
    this._goop.internalValue = value;
  }
  public resetGoop() {
    this._goop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goopInput() {
    return this._goop.internalValue;
  }

  // grayscale - computed: false, optional: true, required: false
  private _grayscale = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGrayscaleList(this, "grayscale", false);
  public get grayscale() {
    return this._grayscale;
  }
  public putGrayscale(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareGrayscale[] | cdktf.IResolvable) {
    this._grayscale.internalValue = value;
  }
  public resetGrayscale() {
    this._grayscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grayscaleInput() {
    return this._grayscale.internalValue;
  }

  // hsl - computed: false, optional: true, required: false
  private _hsl = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHslList(this, "hsl", false);
  public get hsl() {
    return this._hsl;
  }
  public putHsl(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsl[] | cdktf.IResolvable) {
    this._hsl.internalValue = value;
  }
  public resetHsl() {
    this._hsl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hslInput() {
    return this._hsl.internalValue;
  }

  // hsv - computed: false, optional: true, required: false
  private _hsv = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsvList(this, "hsv", false);
  public get hsv() {
    return this._hsv;
  }
  public putHsv(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareHsv[] | cdktf.IResolvable) {
    this._hsv.internalValue = value;
  }
  public resetHsv() {
    this._hsv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsvInput() {
    return this._hsv.internalValue;
  }

  // if_dimension - computed: false, optional: true, required: false
  private _ifDimension = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareIfDimensionList(this, "if_dimension", false);
  public get ifDimension() {
    return this._ifDimension;
  }
  public putIfDimension(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareIfDimension[] | cdktf.IResolvable) {
    this._ifDimension.internalValue = value;
  }
  public resetIfDimension() {
    this._ifDimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifDimensionInput() {
    return this._ifDimension.internalValue;
  }

  // if_orientation - computed: false, optional: true, required: false
  private _ifOrientation = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationList(this, "if_orientation", false);
  public get ifOrientation() {
    return this._ifOrientation;
  }
  public putIfOrientation(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientation[] | cdktf.IResolvable) {
    this._ifOrientation.internalValue = value;
  }
  public resetIfOrientation() {
    this._ifOrientation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifOrientationInput() {
    return this._ifOrientation.internalValue;
  }

  // im_query - computed: false, optional: true, required: false
  private _imQuery = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareImQueryList(this, "im_query", false);
  public get imQuery() {
    return this._imQuery;
  }
  public putImQuery(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareImQuery[] | cdktf.IResolvable) {
    this._imQuery.internalValue = value;
  }
  public resetImQuery() {
    this._imQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imQueryInput() {
    return this._imQuery.internalValue;
  }

  // max_colors - computed: false, optional: true, required: false
  private _maxColors = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMaxColorsList(this, "max_colors", false);
  public get maxColors() {
    return this._maxColors;
  }
  public putMaxColors(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMaxColors[] | cdktf.IResolvable) {
    this._maxColors.internalValue = value;
  }
  public resetMaxColors() {
    this._maxColors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxColorsInput() {
    return this._maxColors.internalValue;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMirrorList(this, "mirror", false);
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMirror[] | cdktf.IResolvable) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }

  // mono_hue - computed: false, optional: true, required: false
  private _monoHue = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMonoHueList(this, "mono_hue", false);
  public get monoHue() {
    return this._monoHue;
  }
  public putMonoHue(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareMonoHue[] | cdktf.IResolvable) {
    this._monoHue.internalValue = value;
  }
  public resetMonoHue() {
    this._monoHue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monoHueInput() {
    return this._monoHue.internalValue;
  }

  // opacity - computed: false, optional: true, required: false
  private _opacity = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOpacityList(this, "opacity", false);
  public get opacity() {
    return this._opacity;
  }
  public putOpacity(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOpacity[] | cdktf.IResolvable) {
    this._opacity.internalValue = value;
  }
  public resetOpacity() {
    this._opacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity.internalValue;
  }

  // region_of_interest_crop - computed: false, optional: true, required: false
  private _regionOfInterestCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRegionOfInterestCropList(this, "region_of_interest_crop", false);
  public get regionOfInterestCrop() {
    return this._regionOfInterestCrop;
  }
  public putRegionOfInterestCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRegionOfInterestCrop[] | cdktf.IResolvable) {
    this._regionOfInterestCrop.internalValue = value;
  }
  public resetRegionOfInterestCrop() {
    this._regionOfInterestCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionOfInterestCropInput() {
    return this._regionOfInterestCrop.internalValue;
  }

  // relative_crop - computed: false, optional: true, required: false
  private _relativeCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRelativeCropList(this, "relative_crop", false);
  public get relativeCrop() {
    return this._relativeCrop;
  }
  public putRelativeCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRelativeCrop[] | cdktf.IResolvable) {
    this._relativeCrop.internalValue = value;
  }
  public resetRelativeCrop() {
    this._relativeCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeCropInput() {
    return this._relativeCrop.internalValue;
  }

  // remove_color - computed: false, optional: true, required: false
  private _removeColor = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRemoveColorList(this, "remove_color", false);
  public get removeColor() {
    return this._removeColor;
  }
  public putRemoveColor(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRemoveColor[] | cdktf.IResolvable) {
    this._removeColor.internalValue = value;
  }
  public resetRemoveColor() {
    this._removeColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeColorInput() {
    return this._removeColor.internalValue;
  }

  // resize - computed: false, optional: true, required: false
  private _resize = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareResizeList(this, "resize", false);
  public get resize() {
    return this._resize;
  }
  public putResize(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareResize[] | cdktf.IResolvable) {
    this._resize.internalValue = value;
  }
  public resetResize() {
    this._resize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeInput() {
    return this._resize.internalValue;
  }

  // rotate - computed: false, optional: true, required: false
  private _rotate = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRotateList(this, "rotate", false);
  public get rotate() {
    return this._rotate;
  }
  public putRotate(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareRotate[] | cdktf.IResolvable) {
    this._rotate.internalValue = value;
  }
  public resetRotate() {
    this._rotate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateInput() {
    return this._rotate.internalValue;
  }

  // scale - computed: false, optional: true, required: false
  private _scale = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareScaleList(this, "scale", false);
  public get scale() {
    return this._scale;
  }
  public putScale(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareScale[] | cdktf.IResolvable) {
    this._scale.internalValue = value;
  }
  public resetScale() {
    this._scale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale.internalValue;
  }

  // shear - computed: false, optional: true, required: false
  private _shear = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShearList(this, "shear", false);
  public get shear() {
    return this._shear;
  }
  public putShear(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareShear[] | cdktf.IResolvable) {
    this._shear.internalValue = value;
  }
  public resetShear() {
    this._shear.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shearInput() {
    return this._shear.internalValue;
  }

  // smart_crop - computed: false, optional: true, required: false
  private _smartCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCropList(this, "smart_crop", false);
  public get smartCrop() {
    return this._smartCrop;
  }
  public putSmartCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareSmartCrop[] | cdktf.IResolvable) {
    this._smartCrop.internalValue = value;
  }
  public resetSmartCrop() {
    this._smartCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartCropInput() {
    return this._smartCrop.internalValue;
  }

  // trim - computed: false, optional: true, required: false
  private _trim = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrimList(this, "trim", false);
  public get trim() {
    return this._trim;
  }
  public putTrim(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareTrim[] | cdktf.IResolvable) {
    this._trim.internalValue = value;
  }
  public resetTrim() {
    this._trim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimInput() {
    return this._trim.internalValue;
  }

  // unsharp_mask - computed: false, optional: true, required: false
  private _unsharpMask = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMaskList(this, "unsharp_mask", false);
  public get unsharpMask() {
    return this._unsharpMask;
  }
  public putUnsharpMask(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareUnsharpMask[] | cdktf.IResolvable) {
    this._unsharpMask.internalValue = value;
  }
  public resetUnsharpMask() {
    this._unsharpMask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsharpMaskInput() {
    return this._unsharpMask.internalValue;
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientation {
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#default DataAkamaiImagingPolicyImage#default}
  */
  readonly default?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationDefault;
  /**
  * landscape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#landscape DataAkamaiImagingPolicyImage#landscape}
  */
  readonly landscape?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationLandscape;
  /**
  * portrait block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#portrait DataAkamaiImagingPolicyImage#portrait}
  */
  readonly portrait?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationPortrait;
  /**
  * square block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#square DataAkamaiImagingPolicyImage#square}
  */
  readonly square?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquare;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationDefaultToTerraform(struct!.default),
    landscape: dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationLandscapeToTerraform(struct!.landscape),
    portrait: dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationPortraitToTerraform(struct!.portrait),
    square: dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareToTerraform(struct!.square),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationDefaultList",
    },
    landscape: {
      value: dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationLandscapeToHclTerraform(struct!.landscape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationLandscapeList",
    },
    portrait: {
      value: dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationPortraitToHclTerraform(struct!.portrait),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationPortraitList",
    },
    square: {
      value: dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareToHclTerraform(struct!.square),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._landscape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.landscape = this._landscape?.internalValue;
    }
    if (this._portrait?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portrait = this._portrait?.internalValue;
    }
    if (this._square?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.square = this._square?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._landscape.internalValue = undefined;
      this._portrait.internalValue = undefined;
      this._square.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._landscape.internalValue = value.landscape;
      this._portrait.internalValue = value.portrait;
      this._square.internalValue = value.square;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // landscape - computed: false, optional: true, required: false
  private _landscape = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationLandscapeOutputReference(this, "landscape");
  public get landscape() {
    return this._landscape;
  }
  public putLandscape(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationLandscape) {
    this._landscape.internalValue = value;
  }
  public resetLandscape() {
    this._landscape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landscapeInput() {
    return this._landscape.internalValue;
  }

  // portrait - computed: false, optional: true, required: false
  private _portrait = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationPortraitOutputReference(this, "portrait");
  public get portrait() {
    return this._portrait;
  }
  public putPortrait(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationPortrait) {
    this._portrait.internalValue = value;
  }
  public resetPortrait() {
    this._portrait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portraitInput() {
    return this._portrait.internalValue;
  }

  // square - computed: false, optional: true, required: false
  private _square = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquareOutputReference(this, "square");
  public get square() {
    return this._square;
  }
  public putSquare(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationSquare) {
    this._square.internalValue = value;
  }
  public resetSquare() {
    this._square.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squareInput() {
    return this._square.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsImQuery {
  /**
  * Specifies the transformations that can be applied using the query string parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#allowed_transformations DataAkamaiImagingPolicyImage#allowed_transformations}
  */
  readonly allowedTransformations: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#query_var DataAkamaiImagingPolicyImage#query_var}
  */
  readonly queryVar: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsImQueryToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsImQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_transformations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedTransformations),
    query_var: cdktf.stringToTerraform(struct!.queryVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsImQueryToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsImQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_transformations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedTransformations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_var: {
      value: cdktf.stringToHclTerraform(struct!.queryVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsImQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsImQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedTransformations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTransformations = this._allowedTransformations;
    }
    if (this._queryVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryVar = this._queryVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsImQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedTransformations = undefined;
      this._queryVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedTransformations = value.allowedTransformations;
      this._queryVar = value.queryVar;
    }
  }

  // allowed_transformations - computed: false, optional: false, required: true
  private _allowedTransformations?: string[]; 
  public get allowedTransformations() {
    return this.getListAttribute('allowed_transformations');
  }
  public set allowedTransformations(value: string[]) {
    this._allowedTransformations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTransformationsInput() {
    return this._allowedTransformations;
  }

  // query_var - computed: false, optional: false, required: true
  private _queryVar?: string; 
  public get queryVar() {
    return this.getStringAttribute('query_var');
  }
  public set queryVar(value: string) {
    this._queryVar = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryVarInput() {
    return this._queryVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsImQueryList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsImQuery[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsImQueryOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsImQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsMaxColors {
  /**
  * The value representing the maximum number of colors to use with the source image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#colors DataAkamaiImagingPolicyImage#colors}
  */
  readonly colors?: string;
  /**
  * The value representing the maximum number of colors to use with the source image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#colors_var DataAkamaiImagingPolicyImage#colors_var}
  */
  readonly colorsVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsMaxColorsToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsMaxColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colors: cdktf.stringToTerraform(struct!.colors),
    colors_var: cdktf.stringToTerraform(struct!.colorsVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsMaxColorsToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsMaxColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    colors: {
      value: cdktf.stringToHclTerraform(struct!.colors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    colors_var: {
      value: cdktf.stringToHclTerraform(struct!.colorsVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsMaxColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsMaxColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors;
    }
    if (this._colorsVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorsVar = this._colorsVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsMaxColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._colors = undefined;
      this._colorsVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._colors = value.colors;
      this._colorsVar = value.colorsVar;
    }
  }

  // colors - computed: false, optional: true, required: false
  private _colors?: string; 
  public get colors() {
    return this.getStringAttribute('colors');
  }
  public set colors(value: string) {
    this._colors = value;
  }
  public resetColors() {
    this._colors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors;
  }

  // colors_var - computed: false, optional: true, required: false
  private _colorsVar?: string; 
  public get colorsVar() {
    return this.getStringAttribute('colors_var');
  }
  public set colorsVar(value: string) {
    this._colorsVar = value;
  }
  public resetColorsVar() {
    this._colorsVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsVarInput() {
    return this._colorsVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsMaxColorsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsMaxColors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsMaxColorsOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsMaxColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsMirror {
  /**
  * Flips the image horizontally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#horizontal DataAkamaiImagingPolicyImage#horizontal}
  */
  readonly horizontal?: string;
  /**
  * Flips the image horizontally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#horizontal_var DataAkamaiImagingPolicyImage#horizontal_var}
  */
  readonly horizontalVar?: string;
  /**
  * Flips the image vertically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#vertical DataAkamaiImagingPolicyImage#vertical}
  */
  readonly vertical?: string;
  /**
  * Flips the image vertically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#vertical_var DataAkamaiImagingPolicyImage#vertical_var}
  */
  readonly verticalVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsMirrorToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    horizontal: cdktf.stringToTerraform(struct!.horizontal),
    horizontal_var: cdktf.stringToTerraform(struct!.horizontalVar),
    vertical: cdktf.stringToTerraform(struct!.vertical),
    vertical_var: cdktf.stringToTerraform(struct!.verticalVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsMirrorToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    horizontal: {
      value: cdktf.stringToHclTerraform(struct!.horizontal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    horizontal_var: {
      value: cdktf.stringToHclTerraform(struct!.horizontalVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vertical: {
      value: cdktf.stringToHclTerraform(struct!.vertical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vertical_var: {
      value: cdktf.stringToHclTerraform(struct!.verticalVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._horizontal !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontal = this._horizontal;
    }
    if (this._horizontalVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalVar = this._horizontalVar;
    }
    if (this._vertical !== undefined) {
      hasAnyValues = true;
      internalValueResult.vertical = this._vertical;
    }
    if (this._verticalVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalVar = this._verticalVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._horizontal = undefined;
      this._horizontalVar = undefined;
      this._vertical = undefined;
      this._verticalVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._horizontal = value.horizontal;
      this._horizontalVar = value.horizontalVar;
      this._vertical = value.vertical;
      this._verticalVar = value.verticalVar;
    }
  }

  // horizontal - computed: false, optional: true, required: false
  private _horizontal?: string; 
  public get horizontal() {
    return this.getStringAttribute('horizontal');
  }
  public set horizontal(value: string) {
    this._horizontal = value;
  }
  public resetHorizontal() {
    this._horizontal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalInput() {
    return this._horizontal;
  }

  // horizontal_var - computed: false, optional: true, required: false
  private _horizontalVar?: string; 
  public get horizontalVar() {
    return this.getStringAttribute('horizontal_var');
  }
  public set horizontalVar(value: string) {
    this._horizontalVar = value;
  }
  public resetHorizontalVar() {
    this._horizontalVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalVarInput() {
    return this._horizontalVar;
  }

  // vertical - computed: false, optional: true, required: false
  private _vertical?: string; 
  public get vertical() {
    return this.getStringAttribute('vertical');
  }
  public set vertical(value: string) {
    this._vertical = value;
  }
  public resetVertical() {
    this._vertical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalInput() {
    return this._vertical;
  }

  // vertical_var - computed: false, optional: true, required: false
  private _verticalVar?: string; 
  public get verticalVar() {
    return this.getStringAttribute('vertical_var');
  }
  public set verticalVar(value: string) {
    this._verticalVar = value;
  }
  public resetVerticalVar() {
    this._verticalVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalVarInput() {
    return this._verticalVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsMirrorList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsMirror[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsMirrorOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsMirrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsMonoHue {
  /**
  * Specify a hue by indicating the degree of rotation between 0 and 360 degrees around the color wheel. By default Mono Hue applies a red hue, 0.0 on the color wheel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#hue DataAkamaiImagingPolicyImage#hue}
  */
  readonly hue?: string;
  /**
  * Specify a hue by indicating the degree of rotation between 0 and 360 degrees around the color wheel. By default Mono Hue applies a red hue, 0.0 on the color wheel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#hue_var DataAkamaiImagingPolicyImage#hue_var}
  */
  readonly hueVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsMonoHueToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsMonoHue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hue: cdktf.stringToTerraform(struct!.hue),
    hue_var: cdktf.stringToTerraform(struct!.hueVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsMonoHueToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsMonoHue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hue: {
      value: cdktf.stringToHclTerraform(struct!.hue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hue_var: {
      value: cdktf.stringToHclTerraform(struct!.hueVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsMonoHueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsMonoHue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hue = this._hue;
    }
    if (this._hueVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.hueVar = this._hueVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsMonoHue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hue = undefined;
      this._hueVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hue = value.hue;
      this._hueVar = value.hueVar;
    }
  }

  // hue - computed: false, optional: true, required: false
  private _hue?: string; 
  public get hue() {
    return this.getStringAttribute('hue');
  }
  public set hue(value: string) {
    this._hue = value;
  }
  public resetHue() {
    this._hue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hueInput() {
    return this._hue;
  }

  // hue_var - computed: false, optional: true, required: false
  private _hueVar?: string; 
  public get hueVar() {
    return this.getStringAttribute('hue_var');
  }
  public set hueVar(value: string) {
    this._hueVar = value;
  }
  public resetHueVar() {
    this._hueVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hueVarInput() {
    return this._hueVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsMonoHueList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsMonoHue[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsMonoHueOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsMonoHueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsOpacity {
  /**
  * Represents alpha values on a scale of `0` to `1`. Values below `1` increase transparency, and `0` is invisible. For images that have some transparency, values above `1` increase the opacity of the transparent portions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#opacity DataAkamaiImagingPolicyImage#opacity}
  */
  readonly opacity?: string;
  /**
  * Represents alpha values on a scale of `0` to `1`. Values below `1` increase transparency, and `0` is invisible. For images that have some transparency, values above `1` increase the opacity of the transparent portions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#opacity_var DataAkamaiImagingPolicyImage#opacity_var}
  */
  readonly opacityVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsOpacityToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsOpacity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opacity: cdktf.stringToTerraform(struct!.opacity),
    opacity_var: cdktf.stringToTerraform(struct!.opacityVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsOpacityToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsOpacity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opacity: {
      value: cdktf.stringToHclTerraform(struct!.opacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opacity_var: {
      value: cdktf.stringToHclTerraform(struct!.opacityVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsOpacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsOpacity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacity = this._opacity;
    }
    if (this._opacityVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacityVar = this._opacityVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsOpacity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._opacity = undefined;
      this._opacityVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._opacity = value.opacity;
      this._opacityVar = value.opacityVar;
    }
  }

  // opacity - computed: false, optional: true, required: false
  private _opacity?: string; 
  public get opacity() {
    return this.getStringAttribute('opacity');
  }
  public set opacity(value: string) {
    this._opacity = value;
  }
  public resetOpacity() {
    this._opacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity;
  }

  // opacity_var - computed: false, optional: true, required: false
  private _opacityVar?: string; 
  public get opacityVar() {
    return this.getStringAttribute('opacity_var');
  }
  public set opacityVar(value: string) {
    this._opacityVar = value;
  }
  public resetOpacityVar() {
    this._opacityVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityVarInput() {
    return this._opacityVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsOpacityList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsOpacity[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsOpacityOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsOpacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenter {
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x DataAkamaiImagingPolicyImage#x}
  */
  readonly x?: string;
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_var DataAkamaiImagingPolicyImage#x_var}
  */
  readonly xVar?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y DataAkamaiImagingPolicyImage#y}
  */
  readonly y?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_var DataAkamaiImagingPolicyImage#y_var}
  */
  readonly yVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenterToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenterOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.stringToTerraform(struct!.x),
    x_var: cdktf.stringToTerraform(struct!.xVar),
    y: cdktf.stringToTerraform(struct!.y),
    y_var: cdktf.stringToTerraform(struct!.yVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenterToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenterOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_var: {
      value: cdktf.stringToHclTerraform(struct!.xVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_var: {
      value: cdktf.stringToHclTerraform(struct!.yVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._xVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.xVar = this._xVar;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    if (this._yVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.yVar = this._yVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x = undefined;
      this._xVar = undefined;
      this._y = undefined;
      this._yVar = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x = value.x;
      this._xVar = value.xVar;
      this._y = value.y;
      this._yVar = value.yVar;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // x_var - computed: false, optional: true, required: false
  private _xVar?: string; 
  public get xVar() {
    return this.getStringAttribute('x_var');
  }
  public set xVar(value: string) {
    this._xVar = value;
  }
  public resetXVar() {
    this._xVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xVarInput() {
    return this._xVar;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // y_var - computed: false, optional: true, required: false
  private _yVar?: string; 
  public get yVar() {
    return this.getStringAttribute('y_var');
  }
  public set yVar(value: string) {
    this._yVar = value;
  }
  public resetYVar() {
    this._yVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yVarInput() {
    return this._yVar;
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShape {
  /**
  * The radius of the circle measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#radius DataAkamaiImagingPolicyImage#radius}
  */
  readonly radius?: string;
  /**
  * The radius of the circle measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#radius_var DataAkamaiImagingPolicyImage#radius_var}
  */
  readonly radiusVar?: string;
  /**
  * center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#center DataAkamaiImagingPolicyImage#center}
  */
  readonly center: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenter;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    radius: cdktf.stringToTerraform(struct!.radius),
    radius_var: cdktf.stringToTerraform(struct!.radiusVar),
    center: dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenterToTerraform(struct!.center),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    radius: {
      value: cdktf.stringToHclTerraform(struct!.radius),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_var: {
      value: cdktf.stringToHclTerraform(struct!.radiusVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    center: {
      value: dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenterToHclTerraform(struct!.center),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius;
    }
    if (this._radiusVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusVar = this._radiusVar;
    }
    if (this._center?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.center = this._center?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._radius = undefined;
      this._radiusVar = undefined;
      this._center.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._radius = value.radius;
      this._radiusVar = value.radiusVar;
      this._center.internalValue = value.center;
    }
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: string; 
  public get radius() {
    return this.getStringAttribute('radius');
  }
  public set radius(value: string) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // radius_var - computed: false, optional: true, required: false
  private _radiusVar?: string; 
  public get radiusVar() {
    return this.getStringAttribute('radius_var');
  }
  public set radiusVar(value: string) {
    this._radiusVar = value;
  }
  public resetRadiusVar() {
    this._radiusVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusVarInput() {
    return this._radiusVar;
  }

  // center - computed: false, optional: false, required: true
  private _center = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenterOutputReference(this, "center");
  public get center() {
    return this._center;
  }
  public putCenter(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeCenter) {
    this._center.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get centerInput() {
    return this._center.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShape[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShape {
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x DataAkamaiImagingPolicyImage#x}
  */
  readonly x?: string;
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_var DataAkamaiImagingPolicyImage#x_var}
  */
  readonly xVar?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y DataAkamaiImagingPolicyImage#y}
  */
  readonly y?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_var DataAkamaiImagingPolicyImage#y_var}
  */
  readonly yVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShapeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.stringToTerraform(struct!.x),
    x_var: cdktf.stringToTerraform(struct!.xVar),
    y: cdktf.stringToTerraform(struct!.y),
    y_var: cdktf.stringToTerraform(struct!.yVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShapeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_var: {
      value: cdktf.stringToHclTerraform(struct!.xVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_var: {
      value: cdktf.stringToHclTerraform(struct!.yVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._xVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.xVar = this._xVar;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    if (this._yVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.yVar = this._yVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x = undefined;
      this._xVar = undefined;
      this._y = undefined;
      this._yVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x = value.x;
      this._xVar = value.xVar;
      this._y = value.y;
      this._yVar = value.yVar;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // x_var - computed: false, optional: true, required: false
  private _xVar?: string; 
  public get xVar() {
    return this.getStringAttribute('x_var');
  }
  public set xVar(value: string) {
    this._xVar = value;
  }
  public resetXVar() {
    this._xVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xVarInput() {
    return this._xVar;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // y_var - computed: false, optional: true, required: false
  private _yVar?: string; 
  public get yVar() {
    return this.getStringAttribute('y_var');
  }
  public set yVar(value: string) {
    this._yVar = value;
  }
  public resetYVar() {
    this._yVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yVarInput() {
    return this._yVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShapeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShape[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShapeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShapeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePoints {
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x DataAkamaiImagingPolicyImage#x}
  */
  readonly x?: string;
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_var DataAkamaiImagingPolicyImage#x_var}
  */
  readonly xVar?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y DataAkamaiImagingPolicyImage#y}
  */
  readonly y?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_var DataAkamaiImagingPolicyImage#y_var}
  */
  readonly yVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePointsToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.stringToTerraform(struct!.x),
    x_var: cdktf.stringToTerraform(struct!.xVar),
    y: cdktf.stringToTerraform(struct!.y),
    y_var: cdktf.stringToTerraform(struct!.yVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePointsToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_var: {
      value: cdktf.stringToHclTerraform(struct!.xVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_var: {
      value: cdktf.stringToHclTerraform(struct!.yVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._xVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.xVar = this._xVar;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    if (this._yVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.yVar = this._yVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x = undefined;
      this._xVar = undefined;
      this._y = undefined;
      this._yVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x = value.x;
      this._xVar = value.xVar;
      this._y = value.y;
      this._yVar = value.yVar;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // x_var - computed: false, optional: true, required: false
  private _xVar?: string; 
  public get xVar() {
    return this.getStringAttribute('x_var');
  }
  public set xVar(value: string) {
    this._xVar = value;
  }
  public resetXVar() {
    this._xVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xVarInput() {
    return this._xVar;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // y_var - computed: false, optional: true, required: false
  private _yVar?: string; 
  public get yVar() {
    return this.getStringAttribute('y_var');
  }
  public set yVar(value: string) {
    this._yVar = value;
  }
  public resetYVar() {
    this._yVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yVarInput() {
    return this._yVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePointsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePoints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePointsOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShape {
  /**
  * points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#points DataAkamaiImagingPolicyImage#points}
  */
  readonly points: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePoints[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    points: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePointsToTerraform, true)(struct!.points),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    points: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePointsToHclTerraform, true)(struct!.points),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._points?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.points = this._points?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._points.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._points.internalValue = value.points;
    }
  }

  // points - computed: false, optional: false, required: true
  private _points = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePointsList(this, "points", false);
  public get points() {
    return this._points;
  }
  public putPoints(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapePoints[] | cdktf.IResolvable) {
    this._points.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pointsInput() {
    return this._points.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShape[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchor {
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x DataAkamaiImagingPolicyImage#x}
  */
  readonly x?: string;
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_var DataAkamaiImagingPolicyImage#x_var}
  */
  readonly xVar?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y DataAkamaiImagingPolicyImage#y}
  */
  readonly y?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_var DataAkamaiImagingPolicyImage#y_var}
  */
  readonly yVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchorToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchorOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.stringToTerraform(struct!.x),
    x_var: cdktf.stringToTerraform(struct!.xVar),
    y: cdktf.stringToTerraform(struct!.y),
    y_var: cdktf.stringToTerraform(struct!.yVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchorToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchorOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_var: {
      value: cdktf.stringToHclTerraform(struct!.xVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_var: {
      value: cdktf.stringToHclTerraform(struct!.yVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._xVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.xVar = this._xVar;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    if (this._yVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.yVar = this._yVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x = undefined;
      this._xVar = undefined;
      this._y = undefined;
      this._yVar = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x = value.x;
      this._xVar = value.xVar;
      this._y = value.y;
      this._yVar = value.yVar;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // x_var - computed: false, optional: true, required: false
  private _xVar?: string; 
  public get xVar() {
    return this.getStringAttribute('x_var');
  }
  public set xVar(value: string) {
    this._xVar = value;
  }
  public resetXVar() {
    this._xVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xVarInput() {
    return this._xVar;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // y_var - computed: false, optional: true, required: false
  private _yVar?: string; 
  public get yVar() {
    return this.getStringAttribute('y_var');
  }
  public set yVar(value: string) {
    this._yVar = value;
  }
  public resetYVar() {
    this._yVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yVarInput() {
    return this._yVar;
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShape {
  /**
  * Extends the rectangle down from the `anchor` point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height DataAkamaiImagingPolicyImage#height}
  */
  readonly height?: string;
  /**
  * Extends the rectangle down from the `anchor` point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height_var DataAkamaiImagingPolicyImage#height_var}
  */
  readonly heightVar?: string;
  /**
  * Extends the rectangle right from the `anchor` point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width DataAkamaiImagingPolicyImage#width}
  */
  readonly width?: string;
  /**
  * Extends the rectangle right from the `anchor` point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width_var DataAkamaiImagingPolicyImage#width_var}
  */
  readonly widthVar?: string;
  /**
  * anchor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#anchor DataAkamaiImagingPolicyImage#anchor}
  */
  readonly anchor: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchor;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    height_var: cdktf.stringToTerraform(struct!.heightVar),
    width: cdktf.stringToTerraform(struct!.width),
    width_var: cdktf.stringToTerraform(struct!.widthVar),
    anchor: dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchorToTerraform(struct!.anchor),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height_var: {
      value: cdktf.stringToHclTerraform(struct!.heightVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width_var: {
      value: cdktf.stringToHclTerraform(struct!.widthVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anchor: {
      value: dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchorToHclTerraform(struct!.anchor),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._heightVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.heightVar = this._heightVar;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._widthVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.widthVar = this._widthVar;
    }
    if (this._anchor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anchor = this._anchor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._heightVar = undefined;
      this._width = undefined;
      this._widthVar = undefined;
      this._anchor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._heightVar = value.heightVar;
      this._width = value.width;
      this._widthVar = value.widthVar;
      this._anchor.internalValue = value.anchor;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // height_var - computed: false, optional: true, required: false
  private _heightVar?: string; 
  public get heightVar() {
    return this.getStringAttribute('height_var');
  }
  public set heightVar(value: string) {
    this._heightVar = value;
  }
  public resetHeightVar() {
    this._heightVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightVarInput() {
    return this._heightVar;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // width_var - computed: false, optional: true, required: false
  private _widthVar?: string; 
  public get widthVar() {
    return this.getStringAttribute('width_var');
  }
  public set widthVar(value: string) {
    this._widthVar = value;
  }
  public resetWidthVar() {
    this._widthVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthVarInput() {
    return this._widthVar;
  }

  // anchor - computed: false, optional: false, required: true
  private _anchor = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchorOutputReference(this, "anchor");
  public get anchor() {
    return this._anchor;
  }
  public putAnchor(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeAnchor) {
    this._anchor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anchorInput() {
    return this._anchor.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShape[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenter {
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x DataAkamaiImagingPolicyImage#x}
  */
  readonly x?: string;
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_var DataAkamaiImagingPolicyImage#x_var}
  */
  readonly xVar?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y DataAkamaiImagingPolicyImage#y}
  */
  readonly y?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_var DataAkamaiImagingPolicyImage#y_var}
  */
  readonly yVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenterToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenterOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.stringToTerraform(struct!.x),
    x_var: cdktf.stringToTerraform(struct!.xVar),
    y: cdktf.stringToTerraform(struct!.y),
    y_var: cdktf.stringToTerraform(struct!.yVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenterToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenterOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_var: {
      value: cdktf.stringToHclTerraform(struct!.xVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_var: {
      value: cdktf.stringToHclTerraform(struct!.yVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._xVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.xVar = this._xVar;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    if (this._yVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.yVar = this._yVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x = undefined;
      this._xVar = undefined;
      this._y = undefined;
      this._yVar = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x = value.x;
      this._xVar = value.xVar;
      this._y = value.y;
      this._yVar = value.yVar;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // x_var - computed: false, optional: true, required: false
  private _xVar?: string; 
  public get xVar() {
    return this.getStringAttribute('x_var');
  }
  public set xVar(value: string) {
    this._xVar = value;
  }
  public resetXVar() {
    this._xVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xVarInput() {
    return this._xVar;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // y_var - computed: false, optional: true, required: false
  private _yVar?: string; 
  public get yVar() {
    return this.getStringAttribute('y_var');
  }
  public set yVar(value: string) {
    this._yVar = value;
  }
  public resetYVar() {
    this._yVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yVarInput() {
    return this._yVar;
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShape {
  /**
  * The radius of the circle measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#radius DataAkamaiImagingPolicyImage#radius}
  */
  readonly radius?: string;
  /**
  * The radius of the circle measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#radius_var DataAkamaiImagingPolicyImage#radius_var}
  */
  readonly radiusVar?: string;
  /**
  * center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#center DataAkamaiImagingPolicyImage#center}
  */
  readonly center: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenter;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    radius: cdktf.stringToTerraform(struct!.radius),
    radius_var: cdktf.stringToTerraform(struct!.radiusVar),
    center: dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenterToTerraform(struct!.center),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    radius: {
      value: cdktf.stringToHclTerraform(struct!.radius),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_var: {
      value: cdktf.stringToHclTerraform(struct!.radiusVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    center: {
      value: dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenterToHclTerraform(struct!.center),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius;
    }
    if (this._radiusVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusVar = this._radiusVar;
    }
    if (this._center?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.center = this._center?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._radius = undefined;
      this._radiusVar = undefined;
      this._center.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._radius = value.radius;
      this._radiusVar = value.radiusVar;
      this._center.internalValue = value.center;
    }
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: string; 
  public get radius() {
    return this.getStringAttribute('radius');
  }
  public set radius(value: string) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // radius_var - computed: false, optional: true, required: false
  private _radiusVar?: string; 
  public get radiusVar() {
    return this.getStringAttribute('radius_var');
  }
  public set radiusVar(value: string) {
    this._radiusVar = value;
  }
  public resetRadiusVar() {
    this._radiusVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusVarInput() {
    return this._radiusVar;
  }

  // center - computed: false, optional: false, required: true
  private _center = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenterOutputReference(this, "center");
  public get center() {
    return this._center;
  }
  public putCenter(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeCenter) {
    this._center.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get centerInput() {
    return this._center.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShape[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShape {
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x DataAkamaiImagingPolicyImage#x}
  */
  readonly x?: string;
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_var DataAkamaiImagingPolicyImage#x_var}
  */
  readonly xVar?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y DataAkamaiImagingPolicyImage#y}
  */
  readonly y?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_var DataAkamaiImagingPolicyImage#y_var}
  */
  readonly yVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShapeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.stringToTerraform(struct!.x),
    x_var: cdktf.stringToTerraform(struct!.xVar),
    y: cdktf.stringToTerraform(struct!.y),
    y_var: cdktf.stringToTerraform(struct!.yVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShapeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_var: {
      value: cdktf.stringToHclTerraform(struct!.xVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_var: {
      value: cdktf.stringToHclTerraform(struct!.yVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._xVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.xVar = this._xVar;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    if (this._yVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.yVar = this._yVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x = undefined;
      this._xVar = undefined;
      this._y = undefined;
      this._yVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x = value.x;
      this._xVar = value.xVar;
      this._y = value.y;
      this._yVar = value.yVar;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // x_var - computed: false, optional: true, required: false
  private _xVar?: string; 
  public get xVar() {
    return this.getStringAttribute('x_var');
  }
  public set xVar(value: string) {
    this._xVar = value;
  }
  public resetXVar() {
    this._xVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xVarInput() {
    return this._xVar;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // y_var - computed: false, optional: true, required: false
  private _yVar?: string; 
  public get yVar() {
    return this.getStringAttribute('y_var');
  }
  public set yVar(value: string) {
    this._yVar = value;
  }
  public resetYVar() {
    this._yVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yVarInput() {
    return this._yVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShapeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShape[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShapeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShapeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePoints {
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x DataAkamaiImagingPolicyImage#x}
  */
  readonly x?: string;
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_var DataAkamaiImagingPolicyImage#x_var}
  */
  readonly xVar?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y DataAkamaiImagingPolicyImage#y}
  */
  readonly y?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_var DataAkamaiImagingPolicyImage#y_var}
  */
  readonly yVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePointsToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.stringToTerraform(struct!.x),
    x_var: cdktf.stringToTerraform(struct!.xVar),
    y: cdktf.stringToTerraform(struct!.y),
    y_var: cdktf.stringToTerraform(struct!.yVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePointsToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_var: {
      value: cdktf.stringToHclTerraform(struct!.xVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_var: {
      value: cdktf.stringToHclTerraform(struct!.yVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._xVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.xVar = this._xVar;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    if (this._yVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.yVar = this._yVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x = undefined;
      this._xVar = undefined;
      this._y = undefined;
      this._yVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x = value.x;
      this._xVar = value.xVar;
      this._y = value.y;
      this._yVar = value.yVar;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // x_var - computed: false, optional: true, required: false
  private _xVar?: string; 
  public get xVar() {
    return this.getStringAttribute('x_var');
  }
  public set xVar(value: string) {
    this._xVar = value;
  }
  public resetXVar() {
    this._xVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xVarInput() {
    return this._xVar;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // y_var - computed: false, optional: true, required: false
  private _yVar?: string; 
  public get yVar() {
    return this.getStringAttribute('y_var');
  }
  public set yVar(value: string) {
    this._yVar = value;
  }
  public resetYVar() {
    this._yVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yVarInput() {
    return this._yVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePointsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePoints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePointsOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShape {
  /**
  * points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#points DataAkamaiImagingPolicyImage#points}
  */
  readonly points: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePoints[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    points: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePointsToTerraform, true)(struct!.points),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    points: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePointsToHclTerraform, true)(struct!.points),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._points?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.points = this._points?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._points.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._points.internalValue = value.points;
    }
  }

  // points - computed: false, optional: false, required: true
  private _points = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePointsList(this, "points", false);
  public get points() {
    return this._points;
  }
  public putPoints(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapePoints[] | cdktf.IResolvable) {
    this._points.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pointsInput() {
    return this._points.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShape[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchor {
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x DataAkamaiImagingPolicyImage#x}
  */
  readonly x?: string;
  /**
  * The horizontal position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_var DataAkamaiImagingPolicyImage#x_var}
  */
  readonly xVar?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y DataAkamaiImagingPolicyImage#y}
  */
  readonly y?: string;
  /**
  * The vertical position of the point, measured in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_var DataAkamaiImagingPolicyImage#y_var}
  */
  readonly yVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchorToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchorOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.stringToTerraform(struct!.x),
    x_var: cdktf.stringToTerraform(struct!.xVar),
    y: cdktf.stringToTerraform(struct!.y),
    y_var: cdktf.stringToTerraform(struct!.yVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchorToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchorOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_var: {
      value: cdktf.stringToHclTerraform(struct!.xVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_var: {
      value: cdktf.stringToHclTerraform(struct!.yVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._xVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.xVar = this._xVar;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    if (this._yVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.yVar = this._yVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x = undefined;
      this._xVar = undefined;
      this._y = undefined;
      this._yVar = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x = value.x;
      this._xVar = value.xVar;
      this._y = value.y;
      this._yVar = value.yVar;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // x_var - computed: false, optional: true, required: false
  private _xVar?: string; 
  public get xVar() {
    return this.getStringAttribute('x_var');
  }
  public set xVar(value: string) {
    this._xVar = value;
  }
  public resetXVar() {
    this._xVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xVarInput() {
    return this._xVar;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // y_var - computed: false, optional: true, required: false
  private _yVar?: string; 
  public get yVar() {
    return this.getStringAttribute('y_var');
  }
  public set yVar(value: string) {
    this._yVar = value;
  }
  public resetYVar() {
    this._yVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yVarInput() {
    return this._yVar;
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShape {
  /**
  * Extends the rectangle down from the `anchor` point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height DataAkamaiImagingPolicyImage#height}
  */
  readonly height?: string;
  /**
  * Extends the rectangle down from the `anchor` point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height_var DataAkamaiImagingPolicyImage#height_var}
  */
  readonly heightVar?: string;
  /**
  * Extends the rectangle right from the `anchor` point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width DataAkamaiImagingPolicyImage#width}
  */
  readonly width?: string;
  /**
  * Extends the rectangle right from the `anchor` point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width_var DataAkamaiImagingPolicyImage#width_var}
  */
  readonly widthVar?: string;
  /**
  * anchor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#anchor DataAkamaiImagingPolicyImage#anchor}
  */
  readonly anchor: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchor;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    height_var: cdktf.stringToTerraform(struct!.heightVar),
    width: cdktf.stringToTerraform(struct!.width),
    width_var: cdktf.stringToTerraform(struct!.widthVar),
    anchor: dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchorToTerraform(struct!.anchor),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height_var: {
      value: cdktf.stringToHclTerraform(struct!.heightVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width_var: {
      value: cdktf.stringToHclTerraform(struct!.widthVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anchor: {
      value: dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchorToHclTerraform(struct!.anchor),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._heightVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.heightVar = this._heightVar;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._widthVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.widthVar = this._widthVar;
    }
    if (this._anchor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anchor = this._anchor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._heightVar = undefined;
      this._width = undefined;
      this._widthVar = undefined;
      this._anchor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._heightVar = value.heightVar;
      this._width = value.width;
      this._widthVar = value.widthVar;
      this._anchor.internalValue = value.anchor;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // height_var - computed: false, optional: true, required: false
  private _heightVar?: string; 
  public get heightVar() {
    return this.getStringAttribute('height_var');
  }
  public set heightVar(value: string) {
    this._heightVar = value;
  }
  public resetHeightVar() {
    this._heightVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightVarInput() {
    return this._heightVar;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // width_var - computed: false, optional: true, required: false
  private _widthVar?: string; 
  public get widthVar() {
    return this.getStringAttribute('width_var');
  }
  public set widthVar(value: string) {
    this._widthVar = value;
  }
  public resetWidthVar() {
    this._widthVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthVarInput() {
    return this._widthVar;
  }

  // anchor - computed: false, optional: false, required: true
  private _anchor = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchorOutputReference(this, "anchor");
  public get anchor() {
    return this._anchor;
  }
  public putAnchor(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeAnchor) {
    this._anchor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anchorInput() {
    return this._anchor.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShape[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapes {
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapesToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapesToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapesOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShape {
  /**
  * shapes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#shapes DataAkamaiImagingPolicyImage#shapes}
  */
  readonly shapes: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapes[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shapes: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapesToTerraform, true)(struct!.shapes),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shapes: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapesToHclTerraform, true)(struct!.shapes),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shapes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapes = this._shapes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shapes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shapes.internalValue = value.shapes;
    }
  }

  // shapes - computed: false, optional: false, required: true
  private _shapes = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapesList(this, "shapes", false);
  public get shapes() {
    return this._shapes;
  }
  public putShapes(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeShapes[] | cdktf.IResolvable) {
    this._shapes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapesInput() {
    return this._shapes.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShape[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapes {
  /**
  * circle_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#circle_shape DataAkamaiImagingPolicyImage#circle_shape}
  */
  readonly circleShape?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShape[] | cdktf.IResolvable;
  /**
  * point_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#point_shape DataAkamaiImagingPolicyImage#point_shape}
  */
  readonly pointShape?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShape[] | cdktf.IResolvable;
  /**
  * polygon_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#polygon_shape DataAkamaiImagingPolicyImage#polygon_shape}
  */
  readonly polygonShape?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShape[] | cdktf.IResolvable;
  /**
  * rectangle_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#rectangle_shape DataAkamaiImagingPolicyImage#rectangle_shape}
  */
  readonly rectangleShape?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShape[] | cdktf.IResolvable;
  /**
  * union_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#union_shape DataAkamaiImagingPolicyImage#union_shape}
  */
  readonly unionShape?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShape[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circle_shape: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeToTerraform, true)(struct!.circleShape),
    point_shape: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShapeToTerraform, true)(struct!.pointShape),
    polygon_shape: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapeToTerraform, true)(struct!.polygonShape),
    rectangle_shape: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeToTerraform, true)(struct!.rectangleShape),
    union_shape: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeToTerraform, true)(struct!.unionShape),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circle_shape: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeToHclTerraform, true)(struct!.circleShape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeList",
    },
    point_shape: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShapeToHclTerraform, true)(struct!.pointShape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShapeList",
    },
    polygon_shape: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapeToHclTerraform, true)(struct!.polygonShape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapeList",
    },
    rectangle_shape: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeToHclTerraform, true)(struct!.rectangleShape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeList",
    },
    union_shape: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeToHclTerraform, true)(struct!.unionShape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circleShape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circleShape = this._circleShape?.internalValue;
    }
    if (this._pointShape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointShape = this._pointShape?.internalValue;
    }
    if (this._polygonShape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polygonShape = this._polygonShape?.internalValue;
    }
    if (this._rectangleShape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rectangleShape = this._rectangleShape?.internalValue;
    }
    if (this._unionShape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unionShape = this._unionShape?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circleShape.internalValue = undefined;
      this._pointShape.internalValue = undefined;
      this._polygonShape.internalValue = undefined;
      this._rectangleShape.internalValue = undefined;
      this._unionShape.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circleShape.internalValue = value.circleShape;
      this._pointShape.internalValue = value.pointShape;
      this._polygonShape.internalValue = value.polygonShape;
      this._rectangleShape.internalValue = value.rectangleShape;
      this._unionShape.internalValue = value.unionShape;
    }
  }

  // circle_shape - computed: false, optional: true, required: false
  private _circleShape = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShapeList(this, "circle_shape", false);
  public get circleShape() {
    return this._circleShape;
  }
  public putCircleShape(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesCircleShape[] | cdktf.IResolvable) {
    this._circleShape.internalValue = value;
  }
  public resetCircleShape() {
    this._circleShape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circleShapeInput() {
    return this._circleShape.internalValue;
  }

  // point_shape - computed: false, optional: true, required: false
  private _pointShape = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShapeList(this, "point_shape", false);
  public get pointShape() {
    return this._pointShape;
  }
  public putPointShape(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPointShape[] | cdktf.IResolvable) {
    this._pointShape.internalValue = value;
  }
  public resetPointShape() {
    this._pointShape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointShapeInput() {
    return this._pointShape.internalValue;
  }

  // polygon_shape - computed: false, optional: true, required: false
  private _polygonShape = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShapeList(this, "polygon_shape", false);
  public get polygonShape() {
    return this._polygonShape;
  }
  public putPolygonShape(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesPolygonShape[] | cdktf.IResolvable) {
    this._polygonShape.internalValue = value;
  }
  public resetPolygonShape() {
    this._polygonShape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polygonShapeInput() {
    return this._polygonShape.internalValue;
  }

  // rectangle_shape - computed: false, optional: true, required: false
  private _rectangleShape = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShapeList(this, "rectangle_shape", false);
  public get rectangleShape() {
    return this._rectangleShape;
  }
  public putRectangleShape(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesRectangleShape[] | cdktf.IResolvable) {
    this._rectangleShape.internalValue = value;
  }
  public resetRectangleShape() {
    this._rectangleShape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rectangleShapeInput() {
    return this._rectangleShape.internalValue;
  }

  // union_shape - computed: false, optional: true, required: false
  private _unionShape = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShapeList(this, "union_shape", false);
  public get unionShape() {
    return this._unionShape;
  }
  public putUnionShape(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesUnionShape[] | cdktf.IResolvable) {
    this._unionShape.internalValue = value;
  }
  public resetUnionShape() {
    this._unionShape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unionShapeInput() {
    return this._unionShape.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShape {
  /**
  * shapes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#shapes DataAkamaiImagingPolicyImage#shapes}
  */
  readonly shapes: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapes[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shapes: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesToTerraform, true)(struct!.shapes),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShape | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shapes: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesToHclTerraform, true)(struct!.shapes),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShape | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shapes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapes = this._shapes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShape | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shapes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shapes.internalValue = value.shapes;
    }
  }

  // shapes - computed: false, optional: false, required: true
  private _shapes = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapesList(this, "shapes", false);
  public get shapes() {
    return this._shapes;
  }
  public putShapes(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeShapes[] | cdktf.IResolvable) {
    this._shapes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapesInput() {
    return this._shapes.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShape[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterest {
  /**
  * circle_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#circle_shape DataAkamaiImagingPolicyImage#circle_shape}
  */
  readonly circleShape?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShape[] | cdktf.IResolvable;
  /**
  * point_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#point_shape DataAkamaiImagingPolicyImage#point_shape}
  */
  readonly pointShape?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShape[] | cdktf.IResolvable;
  /**
  * polygon_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#polygon_shape DataAkamaiImagingPolicyImage#polygon_shape}
  */
  readonly polygonShape?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShape[] | cdktf.IResolvable;
  /**
  * rectangle_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#rectangle_shape DataAkamaiImagingPolicyImage#rectangle_shape}
  */
  readonly rectangleShape?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShape[] | cdktf.IResolvable;
  /**
  * union_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#union_shape DataAkamaiImagingPolicyImage#union_shape}
  */
  readonly unionShape?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShape[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circle_shape: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeToTerraform, true)(struct!.circleShape),
    point_shape: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShapeToTerraform, true)(struct!.pointShape),
    polygon_shape: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapeToTerraform, true)(struct!.polygonShape),
    rectangle_shape: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeToTerraform, true)(struct!.rectangleShape),
    union_shape: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeToTerraform, true)(struct!.unionShape),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestOutputReference | DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circle_shape: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeToHclTerraform, true)(struct!.circleShape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeList",
    },
    point_shape: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShapeToHclTerraform, true)(struct!.pointShape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShapeList",
    },
    polygon_shape: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapeToHclTerraform, true)(struct!.polygonShape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapeList",
    },
    rectangle_shape: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeToHclTerraform, true)(struct!.rectangleShape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeList",
    },
    union_shape: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeToHclTerraform, true)(struct!.unionShape),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circleShape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circleShape = this._circleShape?.internalValue;
    }
    if (this._pointShape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointShape = this._pointShape?.internalValue;
    }
    if (this._polygonShape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polygonShape = this._polygonShape?.internalValue;
    }
    if (this._rectangleShape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rectangleShape = this._rectangleShape?.internalValue;
    }
    if (this._unionShape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unionShape = this._unionShape?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._circleShape.internalValue = undefined;
      this._pointShape.internalValue = undefined;
      this._polygonShape.internalValue = undefined;
      this._rectangleShape.internalValue = undefined;
      this._unionShape.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._circleShape.internalValue = value.circleShape;
      this._pointShape.internalValue = value.pointShape;
      this._polygonShape.internalValue = value.polygonShape;
      this._rectangleShape.internalValue = value.rectangleShape;
      this._unionShape.internalValue = value.unionShape;
    }
  }

  // circle_shape - computed: false, optional: true, required: false
  private _circleShape = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShapeList(this, "circle_shape", false);
  public get circleShape() {
    return this._circleShape;
  }
  public putCircleShape(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestCircleShape[] | cdktf.IResolvable) {
    this._circleShape.internalValue = value;
  }
  public resetCircleShape() {
    this._circleShape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circleShapeInput() {
    return this._circleShape.internalValue;
  }

  // point_shape - computed: false, optional: true, required: false
  private _pointShape = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShapeList(this, "point_shape", false);
  public get pointShape() {
    return this._pointShape;
  }
  public putPointShape(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPointShape[] | cdktf.IResolvable) {
    this._pointShape.internalValue = value;
  }
  public resetPointShape() {
    this._pointShape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointShapeInput() {
    return this._pointShape.internalValue;
  }

  // polygon_shape - computed: false, optional: true, required: false
  private _polygonShape = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShapeList(this, "polygon_shape", false);
  public get polygonShape() {
    return this._polygonShape;
  }
  public putPolygonShape(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestPolygonShape[] | cdktf.IResolvable) {
    this._polygonShape.internalValue = value;
  }
  public resetPolygonShape() {
    this._polygonShape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polygonShapeInput() {
    return this._polygonShape.internalValue;
  }

  // rectangle_shape - computed: false, optional: true, required: false
  private _rectangleShape = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShapeList(this, "rectangle_shape", false);
  public get rectangleShape() {
    return this._rectangleShape;
  }
  public putRectangleShape(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestRectangleShape[] | cdktf.IResolvable) {
    this._rectangleShape.internalValue = value;
  }
  public resetRectangleShape() {
    this._rectangleShape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rectangleShapeInput() {
    return this._rectangleShape.internalValue;
  }

  // union_shape - computed: false, optional: true, required: false
  private _unionShape = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShapeList(this, "union_shape", false);
  public get unionShape() {
    return this._unionShape;
  }
  public putUnionShape(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestUnionShape[] | cdktf.IResolvable) {
    this._unionShape.internalValue = value;
  }
  public resetUnionShape() {
    this._unionShape.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unionShapeInput() {
    return this._unionShape.internalValue;
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCrop {
  /**
  * The placement of the crop area relative to the specified area of interest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#gravity DataAkamaiImagingPolicyImage#gravity}
  */
  readonly gravity?: string;
  /**
  * The placement of the crop area relative to the specified area of interest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#gravity_var DataAkamaiImagingPolicyImage#gravity_var}
  */
  readonly gravityVar?: string;
  /**
  * The height in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height DataAkamaiImagingPolicyImage#height}
  */
  readonly height?: string;
  /**
  * The height in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height_var DataAkamaiImagingPolicyImage#height_var}
  */
  readonly heightVar?: string;
  /**
  * Specifies how to crop or scale a crop area for the specified area of interest in the source image, `zoom` by default. The output image resizes to the specified `width` and `height` values. A value of `crop` places raw crop around the point of interest, relative to the specified `gravity` value.  A value of `fill` scales the crop area to include as much of the image and point of interest as possible, relative to the specified `width` and `height` values. A value of `zoom` scales the crop area as small as possible to fit the point of interest, relative to the specified `width` and `height` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#style DataAkamaiImagingPolicyImage#style}
  */
  readonly style?: string;
  /**
  * Specifies how to crop or scale a crop area for the specified area of interest in the source image, `zoom` by default. The output image resizes to the specified `width` and `height` values. A value of `crop` places raw crop around the point of interest, relative to the specified `gravity` value.  A value of `fill` scales the crop area to include as much of the image and point of interest as possible, relative to the specified `width` and `height` values. A value of `zoom` scales the crop area as small as possible to fit the point of interest, relative to the specified `width` and `height` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#style_var DataAkamaiImagingPolicyImage#style_var}
  */
  readonly styleVar?: string;
  /**
  * The width in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width DataAkamaiImagingPolicyImage#width}
  */
  readonly width?: string;
  /**
  * The width in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width_var DataAkamaiImagingPolicyImage#width_var}
  */
  readonly widthVar?: string;
  /**
  * region_of_interest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#region_of_interest DataAkamaiImagingPolicyImage#region_of_interest}
  */
  readonly regionOfInterest: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterest;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gravity: cdktf.stringToTerraform(struct!.gravity),
    gravity_var: cdktf.stringToTerraform(struct!.gravityVar),
    height: cdktf.stringToTerraform(struct!.height),
    height_var: cdktf.stringToTerraform(struct!.heightVar),
    style: cdktf.stringToTerraform(struct!.style),
    style_var: cdktf.stringToTerraform(struct!.styleVar),
    width: cdktf.stringToTerraform(struct!.width),
    width_var: cdktf.stringToTerraform(struct!.widthVar),
    region_of_interest: dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestToTerraform(struct!.regionOfInterest),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gravity: {
      value: cdktf.stringToHclTerraform(struct!.gravity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gravity_var: {
      value: cdktf.stringToHclTerraform(struct!.gravityVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height_var: {
      value: cdktf.stringToHclTerraform(struct!.heightVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style: {
      value: cdktf.stringToHclTerraform(struct!.style),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style_var: {
      value: cdktf.stringToHclTerraform(struct!.styleVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width_var: {
      value: cdktf.stringToHclTerraform(struct!.widthVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_of_interest: {
      value: dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestToHclTerraform(struct!.regionOfInterest),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gravity !== undefined) {
      hasAnyValues = true;
      internalValueResult.gravity = this._gravity;
    }
    if (this._gravityVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.gravityVar = this._gravityVar;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._heightVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.heightVar = this._heightVar;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._styleVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.styleVar = this._styleVar;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._widthVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.widthVar = this._widthVar;
    }
    if (this._regionOfInterest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionOfInterest = this._regionOfInterest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCrop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gravity = undefined;
      this._gravityVar = undefined;
      this._height = undefined;
      this._heightVar = undefined;
      this._style = undefined;
      this._styleVar = undefined;
      this._width = undefined;
      this._widthVar = undefined;
      this._regionOfInterest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gravity = value.gravity;
      this._gravityVar = value.gravityVar;
      this._height = value.height;
      this._heightVar = value.heightVar;
      this._style = value.style;
      this._styleVar = value.styleVar;
      this._width = value.width;
      this._widthVar = value.widthVar;
      this._regionOfInterest.internalValue = value.regionOfInterest;
    }
  }

  // gravity - computed: false, optional: true, required: false
  private _gravity?: string; 
  public get gravity() {
    return this.getStringAttribute('gravity');
  }
  public set gravity(value: string) {
    this._gravity = value;
  }
  public resetGravity() {
    this._gravity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gravityInput() {
    return this._gravity;
  }

  // gravity_var - computed: false, optional: true, required: false
  private _gravityVar?: string; 
  public get gravityVar() {
    return this.getStringAttribute('gravity_var');
  }
  public set gravityVar(value: string) {
    this._gravityVar = value;
  }
  public resetGravityVar() {
    this._gravityVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gravityVarInput() {
    return this._gravityVar;
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // height_var - computed: false, optional: true, required: false
  private _heightVar?: string; 
  public get heightVar() {
    return this.getStringAttribute('height_var');
  }
  public set heightVar(value: string) {
    this._heightVar = value;
  }
  public resetHeightVar() {
    this._heightVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightVarInput() {
    return this._heightVar;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // style_var - computed: false, optional: true, required: false
  private _styleVar?: string; 
  public get styleVar() {
    return this.getStringAttribute('style_var');
  }
  public set styleVar(value: string) {
    this._styleVar = value;
  }
  public resetStyleVar() {
    this._styleVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleVarInput() {
    return this._styleVar;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // width_var - computed: false, optional: true, required: false
  private _widthVar?: string; 
  public get widthVar() {
    return this.getStringAttribute('width_var');
  }
  public set widthVar(value: string) {
    this._widthVar = value;
  }
  public resetWidthVar() {
    this._widthVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthVarInput() {
    return this._widthVar;
  }

  // region_of_interest - computed: false, optional: false, required: true
  private _regionOfInterest = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterestOutputReference(this, "region_of_interest");
  public get regionOfInterest() {
    return this._regionOfInterest;
  }
  public putRegionOfInterest(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropRegionOfInterest) {
    this._regionOfInterest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionOfInterestInput() {
    return this._regionOfInterest.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCrop[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCrop {
  /**
  * The number of pixels to shrink or expand the right side of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#east DataAkamaiImagingPolicyImage#east}
  */
  readonly east?: string;
  /**
  * The number of pixels to shrink or expand the right side of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#east_var DataAkamaiImagingPolicyImage#east_var}
  */
  readonly eastVar?: string;
  /**
  * The number of pixels to shrink or expand the top side of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#north DataAkamaiImagingPolicyImage#north}
  */
  readonly north?: string;
  /**
  * The number of pixels to shrink or expand the top side of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#north_var DataAkamaiImagingPolicyImage#north_var}
  */
  readonly northVar?: string;
  /**
  * The number of pixels to shrink or expand the bottom side of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#south DataAkamaiImagingPolicyImage#south}
  */
  readonly south?: string;
  /**
  * The number of pixels to shrink or expand the bottom side of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#south_var DataAkamaiImagingPolicyImage#south_var}
  */
  readonly southVar?: string;
  /**
  * The number of pixels to shrink or expand the left side of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#west DataAkamaiImagingPolicyImage#west}
  */
  readonly west?: string;
  /**
  * The number of pixels to shrink or expand the left side of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#west_var DataAkamaiImagingPolicyImage#west_var}
  */
  readonly westVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRelativeCropToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    east: cdktf.stringToTerraform(struct!.east),
    east_var: cdktf.stringToTerraform(struct!.eastVar),
    north: cdktf.stringToTerraform(struct!.north),
    north_var: cdktf.stringToTerraform(struct!.northVar),
    south: cdktf.stringToTerraform(struct!.south),
    south_var: cdktf.stringToTerraform(struct!.southVar),
    west: cdktf.stringToTerraform(struct!.west),
    west_var: cdktf.stringToTerraform(struct!.westVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRelativeCropToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    east: {
      value: cdktf.stringToHclTerraform(struct!.east),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    east_var: {
      value: cdktf.stringToHclTerraform(struct!.eastVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    north: {
      value: cdktf.stringToHclTerraform(struct!.north),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    north_var: {
      value: cdktf.stringToHclTerraform(struct!.northVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    south: {
      value: cdktf.stringToHclTerraform(struct!.south),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    south_var: {
      value: cdktf.stringToHclTerraform(struct!.southVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    west: {
      value: cdktf.stringToHclTerraform(struct!.west),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    west_var: {
      value: cdktf.stringToHclTerraform(struct!.westVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._east !== undefined) {
      hasAnyValues = true;
      internalValueResult.east = this._east;
    }
    if (this._eastVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastVar = this._eastVar;
    }
    if (this._north !== undefined) {
      hasAnyValues = true;
      internalValueResult.north = this._north;
    }
    if (this._northVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.northVar = this._northVar;
    }
    if (this._south !== undefined) {
      hasAnyValues = true;
      internalValueResult.south = this._south;
    }
    if (this._southVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.southVar = this._southVar;
    }
    if (this._west !== undefined) {
      hasAnyValues = true;
      internalValueResult.west = this._west;
    }
    if (this._westVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.westVar = this._westVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCrop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._east = undefined;
      this._eastVar = undefined;
      this._north = undefined;
      this._northVar = undefined;
      this._south = undefined;
      this._southVar = undefined;
      this._west = undefined;
      this._westVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._east = value.east;
      this._eastVar = value.eastVar;
      this._north = value.north;
      this._northVar = value.northVar;
      this._south = value.south;
      this._southVar = value.southVar;
      this._west = value.west;
      this._westVar = value.westVar;
    }
  }

  // east - computed: false, optional: true, required: false
  private _east?: string; 
  public get east() {
    return this.getStringAttribute('east');
  }
  public set east(value: string) {
    this._east = value;
  }
  public resetEast() {
    this._east = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastInput() {
    return this._east;
  }

  // east_var - computed: false, optional: true, required: false
  private _eastVar?: string; 
  public get eastVar() {
    return this.getStringAttribute('east_var');
  }
  public set eastVar(value: string) {
    this._eastVar = value;
  }
  public resetEastVar() {
    this._eastVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastVarInput() {
    return this._eastVar;
  }

  // north - computed: false, optional: true, required: false
  private _north?: string; 
  public get north() {
    return this.getStringAttribute('north');
  }
  public set north(value: string) {
    this._north = value;
  }
  public resetNorth() {
    this._north = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get northInput() {
    return this._north;
  }

  // north_var - computed: false, optional: true, required: false
  private _northVar?: string; 
  public get northVar() {
    return this.getStringAttribute('north_var');
  }
  public set northVar(value: string) {
    this._northVar = value;
  }
  public resetNorthVar() {
    this._northVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get northVarInput() {
    return this._northVar;
  }

  // south - computed: false, optional: true, required: false
  private _south?: string; 
  public get south() {
    return this.getStringAttribute('south');
  }
  public set south(value: string) {
    this._south = value;
  }
  public resetSouth() {
    this._south = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get southInput() {
    return this._south;
  }

  // south_var - computed: false, optional: true, required: false
  private _southVar?: string; 
  public get southVar() {
    return this.getStringAttribute('south_var');
  }
  public set southVar(value: string) {
    this._southVar = value;
  }
  public resetSouthVar() {
    this._southVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get southVarInput() {
    return this._southVar;
  }

  // west - computed: false, optional: true, required: false
  private _west?: string; 
  public get west() {
    return this.getStringAttribute('west');
  }
  public set west(value: string) {
    this._west = value;
  }
  public resetWest() {
    this._west = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get westInput() {
    return this._west;
  }

  // west_var - computed: false, optional: true, required: false
  private _westVar?: string; 
  public get westVar() {
    return this.getStringAttribute('west_var');
  }
  public set westVar(value: string) {
    this._westVar = value;
  }
  public resetWestVar() {
    this._westVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get westVarInput() {
    return this._westVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCropList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCrop[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCropOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCropOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColor {
  /**
  * The hexadecimal CSS color value to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#color DataAkamaiImagingPolicyImage#color}
  */
  readonly color?: string;
  /**
  * The hexadecimal CSS color value to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#color_var DataAkamaiImagingPolicyImage#color_var}
  */
  readonly colorVar?: string;
  /**
  * The RemoveColor transformation may create a hard edge around an image. To minimize these hard edges and make the removal of the color more gradual in appearance, use the Feather option. This option allows you to extend the color removal beyond the specified Tolerance. The pixels in this extended tolerance become semi-transparent - creating a softer edge.  The first realtime request for an image using the feather option may result in a slow transformation time. Subsequent requests are not impacted as they are served directly out of cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#feather DataAkamaiImagingPolicyImage#feather}
  */
  readonly feather?: string;
  /**
  * The RemoveColor transformation may create a hard edge around an image. To minimize these hard edges and make the removal of the color more gradual in appearance, use the Feather option. This option allows you to extend the color removal beyond the specified Tolerance. The pixels in this extended tolerance become semi-transparent - creating a softer edge.  The first realtime request for an image using the feather option may result in a slow transformation time. Subsequent requests are not impacted as they are served directly out of cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#feather_var DataAkamaiImagingPolicyImage#feather_var}
  */
  readonly featherVar?: string;
  /**
  * The Tolerance option defines how close the color needs to be to the selected color before it's changed to fully transparent. Set the Tolerance to 0.0 to remove only the exact color specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#tolerance DataAkamaiImagingPolicyImage#tolerance}
  */
  readonly tolerance?: string;
  /**
  * The Tolerance option defines how close the color needs to be to the selected color before it's changed to fully transparent. Set the Tolerance to 0.0 to remove only the exact color specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#tolerance_var DataAkamaiImagingPolicyImage#tolerance_var}
  */
  readonly toleranceVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRemoveColorToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    color_var: cdktf.stringToTerraform(struct!.colorVar),
    feather: cdktf.stringToTerraform(struct!.feather),
    feather_var: cdktf.stringToTerraform(struct!.featherVar),
    tolerance: cdktf.stringToTerraform(struct!.tolerance),
    tolerance_var: cdktf.stringToTerraform(struct!.toleranceVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRemoveColorToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_var: {
      value: cdktf.stringToHclTerraform(struct!.colorVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feather: {
      value: cdktf.stringToHclTerraform(struct!.feather),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feather_var: {
      value: cdktf.stringToHclTerraform(struct!.featherVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerance: {
      value: cdktf.stringToHclTerraform(struct!.tolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerance_var: {
      value: cdktf.stringToHclTerraform(struct!.toleranceVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._colorVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorVar = this._colorVar;
    }
    if (this._feather !== undefined) {
      hasAnyValues = true;
      internalValueResult.feather = this._feather;
    }
    if (this._featherVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.featherVar = this._featherVar;
    }
    if (this._tolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerance = this._tolerance;
    }
    if (this._toleranceVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleranceVar = this._toleranceVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._colorVar = undefined;
      this._feather = undefined;
      this._featherVar = undefined;
      this._tolerance = undefined;
      this._toleranceVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._colorVar = value.colorVar;
      this._feather = value.feather;
      this._featherVar = value.featherVar;
      this._tolerance = value.tolerance;
      this._toleranceVar = value.toleranceVar;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // color_var - computed: false, optional: true, required: false
  private _colorVar?: string; 
  public get colorVar() {
    return this.getStringAttribute('color_var');
  }
  public set colorVar(value: string) {
    this._colorVar = value;
  }
  public resetColorVar() {
    this._colorVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorVarInput() {
    return this._colorVar;
  }

  // feather - computed: false, optional: true, required: false
  private _feather?: string; 
  public get feather() {
    return this.getStringAttribute('feather');
  }
  public set feather(value: string) {
    this._feather = value;
  }
  public resetFeather() {
    this._feather = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featherInput() {
    return this._feather;
  }

  // feather_var - computed: false, optional: true, required: false
  private _featherVar?: string; 
  public get featherVar() {
    return this.getStringAttribute('feather_var');
  }
  public set featherVar(value: string) {
    this._featherVar = value;
  }
  public resetFeatherVar() {
    this._featherVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featherVarInput() {
    return this._featherVar;
  }

  // tolerance - computed: false, optional: true, required: false
  private _tolerance?: string; 
  public get tolerance() {
    return this.getStringAttribute('tolerance');
  }
  public set tolerance(value: string) {
    this._tolerance = value;
  }
  public resetTolerance() {
    this._tolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceInput() {
    return this._tolerance;
  }

  // tolerance_var - computed: false, optional: true, required: false
  private _toleranceVar?: string; 
  public get toleranceVar() {
    return this.getStringAttribute('tolerance_var');
  }
  public set toleranceVar(value: string) {
    this._toleranceVar = value;
  }
  public resetToleranceVar() {
    this._toleranceVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceVarInput() {
    return this._toleranceVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColorList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColor[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColorOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsResize {
  /**
  * Preserves the aspect ratio. Select `fit` to make the image fit entirely within the selected width and height. When using `fit`, the resulting image has the largest possible size for the specified dimensions. Select `fill` to size the image so it both completely fills the dimensions and has the smallest possible file size. Otherwise `ignore` changes the original aspect ratio to fit within an arbitrarily shaped rectangle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#aspect DataAkamaiImagingPolicyImage#aspect}
  */
  readonly aspect?: string;
  /**
  * Preserves the aspect ratio. Select `fit` to make the image fit entirely within the selected width and height. When using `fit`, the resulting image has the largest possible size for the specified dimensions. Select `fill` to size the image so it both completely fills the dimensions and has the smallest possible file size. Otherwise `ignore` changes the original aspect ratio to fit within an arbitrarily shaped rectangle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#aspect_var DataAkamaiImagingPolicyImage#aspect_var}
  */
  readonly aspectVar?: string;
  /**
  * The height to resize the source image to. Must be set if height is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height DataAkamaiImagingPolicyImage#height}
  */
  readonly height?: string;
  /**
  * The height to resize the source image to. Must be set if height is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height_var DataAkamaiImagingPolicyImage#height_var}
  */
  readonly heightVar?: string;
  /**
  * Sets constraints for the image resize. Select `normal` to resize in all cases, either increasing or decreasing the dimensions. Select `downsize` to ignore this transformation if the result would be larger than the original. Select `upsize` to ignore this transformation if the result would be smaller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#type DataAkamaiImagingPolicyImage#type}
  */
  readonly type?: string;
  /**
  * Sets constraints for the image resize. Select `normal` to resize in all cases, either increasing or decreasing the dimensions. Select `downsize` to ignore this transformation if the result would be larger than the original. Select `upsize` to ignore this transformation if the result would be smaller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#type_var DataAkamaiImagingPolicyImage#type_var}
  */
  readonly typeVar?: string;
  /**
  * The width to resize the source image to. Must be set if width is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width DataAkamaiImagingPolicyImage#width}
  */
  readonly width?: string;
  /**
  * The width to resize the source image to. Must be set if width is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width_var DataAkamaiImagingPolicyImage#width_var}
  */
  readonly widthVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsResizeToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aspect: cdktf.stringToTerraform(struct!.aspect),
    aspect_var: cdktf.stringToTerraform(struct!.aspectVar),
    height: cdktf.stringToTerraform(struct!.height),
    height_var: cdktf.stringToTerraform(struct!.heightVar),
    type: cdktf.stringToTerraform(struct!.type),
    type_var: cdktf.stringToTerraform(struct!.typeVar),
    width: cdktf.stringToTerraform(struct!.width),
    width_var: cdktf.stringToTerraform(struct!.widthVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsResizeToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsResize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aspect: {
      value: cdktf.stringToHclTerraform(struct!.aspect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aspect_var: {
      value: cdktf.stringToHclTerraform(struct!.aspectVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height_var: {
      value: cdktf.stringToHclTerraform(struct!.heightVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_var: {
      value: cdktf.stringToHclTerraform(struct!.typeVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width_var: {
      value: cdktf.stringToHclTerraform(struct!.widthVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsResizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsResize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aspect !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspect = this._aspect;
    }
    if (this._aspectVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspectVar = this._aspectVar;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._heightVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.heightVar = this._heightVar;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeVar = this._typeVar;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._widthVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.widthVar = this._widthVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsResize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aspect = undefined;
      this._aspectVar = undefined;
      this._height = undefined;
      this._heightVar = undefined;
      this._type = undefined;
      this._typeVar = undefined;
      this._width = undefined;
      this._widthVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aspect = value.aspect;
      this._aspectVar = value.aspectVar;
      this._height = value.height;
      this._heightVar = value.heightVar;
      this._type = value.type;
      this._typeVar = value.typeVar;
      this._width = value.width;
      this._widthVar = value.widthVar;
    }
  }

  // aspect - computed: false, optional: true, required: false
  private _aspect?: string; 
  public get aspect() {
    return this.getStringAttribute('aspect');
  }
  public set aspect(value: string) {
    this._aspect = value;
  }
  public resetAspect() {
    this._aspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectInput() {
    return this._aspect;
  }

  // aspect_var - computed: false, optional: true, required: false
  private _aspectVar?: string; 
  public get aspectVar() {
    return this.getStringAttribute('aspect_var');
  }
  public set aspectVar(value: string) {
    this._aspectVar = value;
  }
  public resetAspectVar() {
    this._aspectVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectVarInput() {
    return this._aspectVar;
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // height_var - computed: false, optional: true, required: false
  private _heightVar?: string; 
  public get heightVar() {
    return this.getStringAttribute('height_var');
  }
  public set heightVar(value: string) {
    this._heightVar = value;
  }
  public resetHeightVar() {
    this._heightVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightVarInput() {
    return this._heightVar;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_var - computed: false, optional: true, required: false
  private _typeVar?: string; 
  public get typeVar() {
    return this.getStringAttribute('type_var');
  }
  public set typeVar(value: string) {
    this._typeVar = value;
  }
  public resetTypeVar() {
    this._typeVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeVarInput() {
    return this._typeVar;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // width_var - computed: false, optional: true, required: false
  private _widthVar?: string; 
  public get widthVar() {
    return this.getStringAttribute('width_var');
  }
  public set widthVar(value: string) {
    this._widthVar = value;
  }
  public resetWidthVar() {
    this._widthVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthVarInput() {
    return this._widthVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsResizeList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsResize[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsResizeOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsResizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsRotate {
  /**
  * The value to rotate the image by. Positive values rotate clockwise, while negative values rotate counter-clockwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#degrees DataAkamaiImagingPolicyImage#degrees}
  */
  readonly degrees?: string;
  /**
  * The value to rotate the image by. Positive values rotate clockwise, while negative values rotate counter-clockwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#degrees_var DataAkamaiImagingPolicyImage#degrees_var}
  */
  readonly degreesVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsRotateToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRotate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    degrees: cdktf.stringToTerraform(struct!.degrees),
    degrees_var: cdktf.stringToTerraform(struct!.degreesVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsRotateToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsRotate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    degrees: {
      value: cdktf.stringToHclTerraform(struct!.degrees),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    degrees_var: {
      value: cdktf.stringToHclTerraform(struct!.degreesVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRotateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsRotate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._degrees !== undefined) {
      hasAnyValues = true;
      internalValueResult.degrees = this._degrees;
    }
    if (this._degreesVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.degreesVar = this._degreesVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsRotate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._degrees = undefined;
      this._degreesVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._degrees = value.degrees;
      this._degreesVar = value.degreesVar;
    }
  }

  // degrees - computed: false, optional: true, required: false
  private _degrees?: string; 
  public get degrees() {
    return this.getStringAttribute('degrees');
  }
  public set degrees(value: string) {
    this._degrees = value;
  }
  public resetDegrees() {
    this._degrees = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get degreesInput() {
    return this._degrees;
  }

  // degrees_var - computed: false, optional: true, required: false
  private _degreesVar?: string; 
  public get degreesVar() {
    return this.getStringAttribute('degrees_var');
  }
  public set degreesVar(value: string) {
    this._degreesVar = value;
  }
  public resetDegreesVar() {
    this._degreesVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get degreesVarInput() {
    return this._degreesVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsRotateList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsRotate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsRotateOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsRotateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsScale {
  /**
  * Scaling factor for the input height to determine the output height of the image, where values between `0` and `1` decrease size. Image dimensions need to be non-zero positive numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height DataAkamaiImagingPolicyImage#height}
  */
  readonly height?: string;
  /**
  * Scaling factor for the input height to determine the output height of the image, where values between `0` and `1` decrease size. Image dimensions need to be non-zero positive numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height_var DataAkamaiImagingPolicyImage#height_var}
  */
  readonly heightVar?: string;
  /**
  * Scaling factor for the input width to determine the output width of the image, where `1` leaves the width unchanged. Values greater than `1` increase the image size. Image dimensions need to be non-zero positive numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width DataAkamaiImagingPolicyImage#width}
  */
  readonly width?: string;
  /**
  * Scaling factor for the input width to determine the output width of the image, where `1` leaves the width unchanged. Values greater than `1` increase the image size. Image dimensions need to be non-zero positive numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width_var DataAkamaiImagingPolicyImage#width_var}
  */
  readonly widthVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsScaleToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsScale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    height_var: cdktf.stringToTerraform(struct!.heightVar),
    width: cdktf.stringToTerraform(struct!.width),
    width_var: cdktf.stringToTerraform(struct!.widthVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsScaleToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsScale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height_var: {
      value: cdktf.stringToHclTerraform(struct!.heightVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width_var: {
      value: cdktf.stringToHclTerraform(struct!.widthVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsScale | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._heightVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.heightVar = this._heightVar;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._widthVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.widthVar = this._widthVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsScale | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._heightVar = undefined;
      this._width = undefined;
      this._widthVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._heightVar = value.heightVar;
      this._width = value.width;
      this._widthVar = value.widthVar;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // height_var - computed: false, optional: true, required: false
  private _heightVar?: string; 
  public get heightVar() {
    return this.getStringAttribute('height_var');
  }
  public set heightVar(value: string) {
    this._heightVar = value;
  }
  public resetHeightVar() {
    this._heightVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightVarInput() {
    return this._heightVar;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // width_var - computed: false, optional: true, required: false
  private _widthVar?: string; 
  public get widthVar() {
    return this.getStringAttribute('width_var');
  }
  public set widthVar(value: string) {
    this._widthVar = value;
  }
  public resetWidthVar() {
    this._widthVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthVarInput() {
    return this._widthVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsScaleList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsScale[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsScaleOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsShear {
  /**
  * The amount to shear along the x-axis, measured in multiples of the image's width. Must be set if yShear is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_shear DataAkamaiImagingPolicyImage#x_shear}
  */
  readonly xShear?: string;
  /**
  * The amount to shear along the x-axis, measured in multiples of the image's width. Must be set if yShear is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#x_shear_var DataAkamaiImagingPolicyImage#x_shear_var}
  */
  readonly xShearVar?: string;
  /**
  * The amount to shear along the y-axis, measured in multiples of the image's height. Must be set if xShear is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_shear DataAkamaiImagingPolicyImage#y_shear}
  */
  readonly yShear?: string;
  /**
  * The amount to shear along the y-axis, measured in multiples of the image's height. Must be set if xShear is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#y_shear_var DataAkamaiImagingPolicyImage#y_shear_var}
  */
  readonly yShearVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsShearToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsShear | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x_shear: cdktf.stringToTerraform(struct!.xShear),
    x_shear_var: cdktf.stringToTerraform(struct!.xShearVar),
    y_shear: cdktf.stringToTerraform(struct!.yShear),
    y_shear_var: cdktf.stringToTerraform(struct!.yShearVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsShearToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsShear | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x_shear: {
      value: cdktf.stringToHclTerraform(struct!.xShear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_shear_var: {
      value: cdktf.stringToHclTerraform(struct!.xShearVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_shear: {
      value: cdktf.stringToHclTerraform(struct!.yShear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_shear_var: {
      value: cdktf.stringToHclTerraform(struct!.yShearVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsShearOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsShear | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xShear !== undefined) {
      hasAnyValues = true;
      internalValueResult.xShear = this._xShear;
    }
    if (this._xShearVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.xShearVar = this._xShearVar;
    }
    if (this._yShear !== undefined) {
      hasAnyValues = true;
      internalValueResult.yShear = this._yShear;
    }
    if (this._yShearVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.yShearVar = this._yShearVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsShear | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xShear = undefined;
      this._xShearVar = undefined;
      this._yShear = undefined;
      this._yShearVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xShear = value.xShear;
      this._xShearVar = value.xShearVar;
      this._yShear = value.yShear;
      this._yShearVar = value.yShearVar;
    }
  }

  // x_shear - computed: false, optional: true, required: false
  private _xShear?: string; 
  public get xShear() {
    return this.getStringAttribute('x_shear');
  }
  public set xShear(value: string) {
    this._xShear = value;
  }
  public resetXShear() {
    this._xShear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xShearInput() {
    return this._xShear;
  }

  // x_shear_var - computed: false, optional: true, required: false
  private _xShearVar?: string; 
  public get xShearVar() {
    return this.getStringAttribute('x_shear_var');
  }
  public set xShearVar(value: string) {
    this._xShearVar = value;
  }
  public resetXShearVar() {
    this._xShearVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xShearVarInput() {
    return this._xShearVar;
  }

  // y_shear - computed: false, optional: true, required: false
  private _yShear?: string; 
  public get yShear() {
    return this.getStringAttribute('y_shear');
  }
  public set yShear(value: string) {
    this._yShear = value;
  }
  public resetYShear() {
    this._yShear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yShearInput() {
    return this._yShear;
  }

  // y_shear_var - computed: false, optional: true, required: false
  private _yShearVar?: string; 
  public get yShearVar() {
    return this.getStringAttribute('y_shear_var');
  }
  public set yShearVar(value: string) {
    this._yShearVar = value;
  }
  public resetYShearVar() {
    this._yShearVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yShearVarInput() {
    return this._yShearVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsShearList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsShear[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsShearOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsShearOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsSmartCrop {
  /**
  * When enabled, the SmartCrop transformation doesn't actually execute. Instead, it outlines found faces or features, the region of interest, and the crop area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#debug DataAkamaiImagingPolicyImage#debug}
  */
  readonly debug?: string;
  /**
  * When enabled, the SmartCrop transformation doesn't actually execute. Instead, it outlines found faces or features, the region of interest, and the crop area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#debug_var DataAkamaiImagingPolicyImage#debug_var}
  */
  readonly debugVar?: string;
  /**
  * The height in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height DataAkamaiImagingPolicyImage#height}
  */
  readonly height?: string;
  /**
  * The height in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#height_var DataAkamaiImagingPolicyImage#height_var}
  */
  readonly heightVar?: string;
  /**
  * Whether to sacrifice any image fidelity for transformation performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#sloppy DataAkamaiImagingPolicyImage#sloppy}
  */
  readonly sloppy?: string;
  /**
  * Whether to sacrifice any image fidelity for transformation performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#sloppy_var DataAkamaiImagingPolicyImage#sloppy_var}
  */
  readonly sloppyVar?: string;
  /**
  * Specifies how to crop or scale a crop area for the specified area of interest in the source image, `fill` by default. The output image resizes to the specified `width` and `height` values. A value of `crop` places raw crop around the point of interest.  A value of `fill` scales the crop area to include as much of the image and point of interest as possible, relative to the specified `width` and `height` values. A value of `zoom` scales the crop area as small as possible to fit the point of interest, relative to the specified `width` and `height` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#style DataAkamaiImagingPolicyImage#style}
  */
  readonly style?: string;
  /**
  * Specifies how to crop or scale a crop area for the specified area of interest in the source image, `fill` by default. The output image resizes to the specified `width` and `height` values. A value of `crop` places raw crop around the point of interest.  A value of `fill` scales the crop area to include as much of the image and point of interest as possible, relative to the specified `width` and `height` values. A value of `zoom` scales the crop area as small as possible to fit the point of interest, relative to the specified `width` and `height` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#style_var DataAkamaiImagingPolicyImage#style_var}
  */
  readonly styleVar?: string;
  /**
  * The width in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width DataAkamaiImagingPolicyImage#width}
  */
  readonly width?: string;
  /**
  * The width in pixels of the output image relative to the specified `style` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#width_var DataAkamaiImagingPolicyImage#width_var}
  */
  readonly widthVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsSmartCropToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsSmartCrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: cdktf.stringToTerraform(struct!.debug),
    debug_var: cdktf.stringToTerraform(struct!.debugVar),
    height: cdktf.stringToTerraform(struct!.height),
    height_var: cdktf.stringToTerraform(struct!.heightVar),
    sloppy: cdktf.stringToTerraform(struct!.sloppy),
    sloppy_var: cdktf.stringToTerraform(struct!.sloppyVar),
    style: cdktf.stringToTerraform(struct!.style),
    style_var: cdktf.stringToTerraform(struct!.styleVar),
    width: cdktf.stringToTerraform(struct!.width),
    width_var: cdktf.stringToTerraform(struct!.widthVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsSmartCropToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsSmartCrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: cdktf.stringToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_var: {
      value: cdktf.stringToHclTerraform(struct!.debugVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height_var: {
      value: cdktf.stringToHclTerraform(struct!.heightVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sloppy: {
      value: cdktf.stringToHclTerraform(struct!.sloppy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sloppy_var: {
      value: cdktf.stringToHclTerraform(struct!.sloppyVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style: {
      value: cdktf.stringToHclTerraform(struct!.style),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style_var: {
      value: cdktf.stringToHclTerraform(struct!.styleVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width_var: {
      value: cdktf.stringToHclTerraform(struct!.widthVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsSmartCropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsSmartCrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._debugVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugVar = this._debugVar;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._heightVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.heightVar = this._heightVar;
    }
    if (this._sloppy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloppy = this._sloppy;
    }
    if (this._sloppyVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloppyVar = this._sloppyVar;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._styleVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.styleVar = this._styleVar;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._widthVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.widthVar = this._widthVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsSmartCrop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debug = undefined;
      this._debugVar = undefined;
      this._height = undefined;
      this._heightVar = undefined;
      this._sloppy = undefined;
      this._sloppyVar = undefined;
      this._style = undefined;
      this._styleVar = undefined;
      this._width = undefined;
      this._widthVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debug = value.debug;
      this._debugVar = value.debugVar;
      this._height = value.height;
      this._heightVar = value.heightVar;
      this._sloppy = value.sloppy;
      this._sloppyVar = value.sloppyVar;
      this._style = value.style;
      this._styleVar = value.styleVar;
      this._width = value.width;
      this._widthVar = value.widthVar;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: string; 
  public get debug() {
    return this.getStringAttribute('debug');
  }
  public set debug(value: string) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // debug_var - computed: false, optional: true, required: false
  private _debugVar?: string; 
  public get debugVar() {
    return this.getStringAttribute('debug_var');
  }
  public set debugVar(value: string) {
    this._debugVar = value;
  }
  public resetDebugVar() {
    this._debugVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugVarInput() {
    return this._debugVar;
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // height_var - computed: false, optional: true, required: false
  private _heightVar?: string; 
  public get heightVar() {
    return this.getStringAttribute('height_var');
  }
  public set heightVar(value: string) {
    this._heightVar = value;
  }
  public resetHeightVar() {
    this._heightVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightVarInput() {
    return this._heightVar;
  }

  // sloppy - computed: false, optional: true, required: false
  private _sloppy?: string; 
  public get sloppy() {
    return this.getStringAttribute('sloppy');
  }
  public set sloppy(value: string) {
    this._sloppy = value;
  }
  public resetSloppy() {
    this._sloppy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloppyInput() {
    return this._sloppy;
  }

  // sloppy_var - computed: false, optional: true, required: false
  private _sloppyVar?: string; 
  public get sloppyVar() {
    return this.getStringAttribute('sloppy_var');
  }
  public set sloppyVar(value: string) {
    this._sloppyVar = value;
  }
  public resetSloppyVar() {
    this._sloppyVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloppyVarInput() {
    return this._sloppyVar;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // style_var - computed: false, optional: true, required: false
  private _styleVar?: string; 
  public get styleVar() {
    return this.getStringAttribute('style_var');
  }
  public set styleVar(value: string) {
    this._styleVar = value;
  }
  public resetStyleVar() {
    this._styleVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleVarInput() {
    return this._styleVar;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // width_var - computed: false, optional: true, required: false
  private _widthVar?: string; 
  public get widthVar() {
    return this.getStringAttribute('width_var');
  }
  public set widthVar(value: string) {
    this._widthVar = value;
  }
  public resetWidthVar() {
    this._widthVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthVarInput() {
    return this._widthVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsSmartCropList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsSmartCrop[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsSmartCropOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsSmartCropOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsTrim {
  /**
  * The fuzz tolerance of the trim, a value between `0` and `1` that determines the acceptable amount of background variation before trimming stops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#fuzz DataAkamaiImagingPolicyImage#fuzz}
  */
  readonly fuzz?: string;
  /**
  * The fuzz tolerance of the trim, a value between `0` and `1` that determines the acceptable amount of background variation before trimming stops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#fuzz_var DataAkamaiImagingPolicyImage#fuzz_var}
  */
  readonly fuzzVar?: string;
  /**
  * The amount of padding in pixels to add to the trimmed image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#padding DataAkamaiImagingPolicyImage#padding}
  */
  readonly padding?: string;
  /**
  * The amount of padding in pixels to add to the trimmed image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#padding_var DataAkamaiImagingPolicyImage#padding_var}
  */
  readonly paddingVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsTrimToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsTrim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fuzz: cdktf.stringToTerraform(struct!.fuzz),
    fuzz_var: cdktf.stringToTerraform(struct!.fuzzVar),
    padding: cdktf.stringToTerraform(struct!.padding),
    padding_var: cdktf.stringToTerraform(struct!.paddingVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsTrimToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsTrim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fuzz: {
      value: cdktf.stringToHclTerraform(struct!.fuzz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fuzz_var: {
      value: cdktf.stringToHclTerraform(struct!.fuzzVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktf.stringToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding_var: {
      value: cdktf.stringToHclTerraform(struct!.paddingVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsTrimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsTrim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fuzz !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuzz = this._fuzz;
    }
    if (this._fuzzVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuzzVar = this._fuzzVar;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._paddingVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.paddingVar = this._paddingVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsTrim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fuzz = undefined;
      this._fuzzVar = undefined;
      this._padding = undefined;
      this._paddingVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fuzz = value.fuzz;
      this._fuzzVar = value.fuzzVar;
      this._padding = value.padding;
      this._paddingVar = value.paddingVar;
    }
  }

  // fuzz - computed: false, optional: true, required: false
  private _fuzz?: string; 
  public get fuzz() {
    return this.getStringAttribute('fuzz');
  }
  public set fuzz(value: string) {
    this._fuzz = value;
  }
  public resetFuzz() {
    this._fuzz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuzzInput() {
    return this._fuzz;
  }

  // fuzz_var - computed: false, optional: true, required: false
  private _fuzzVar?: string; 
  public get fuzzVar() {
    return this.getStringAttribute('fuzz_var');
  }
  public set fuzzVar(value: string) {
    this._fuzzVar = value;
  }
  public resetFuzzVar() {
    this._fuzzVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuzzVarInput() {
    return this._fuzzVar;
  }

  // padding - computed: false, optional: true, required: false
  private _padding?: string; 
  public get padding() {
    return this.getStringAttribute('padding');
  }
  public set padding(value: string) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // padding_var - computed: false, optional: true, required: false
  private _paddingVar?: string; 
  public get paddingVar() {
    return this.getStringAttribute('padding_var');
  }
  public set paddingVar(value: string) {
    this._paddingVar = value;
  }
  public resetPaddingVar() {
    this._paddingVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingVarInput() {
    return this._paddingVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsTrimList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsTrim[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsTrimOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsTrimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMask {
  /**
  * Set how much emphasis the filter applies to details. Higher values increase apparent sharpness of details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#gain DataAkamaiImagingPolicyImage#gain}
  */
  readonly gain?: string;
  /**
  * Set how much emphasis the filter applies to details. Higher values increase apparent sharpness of details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#gain_var DataAkamaiImagingPolicyImage#gain_var}
  */
  readonly gainVar?: string;
  /**
  * The standard deviation of the Gaussian distribution used in the in unsharp mask, measured in pixels, `1.0` by default. High values emphasize large details and low values emphasize small details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#sigma DataAkamaiImagingPolicyImage#sigma}
  */
  readonly sigma?: string;
  /**
  * The standard deviation of the Gaussian distribution used in the in unsharp mask, measured in pixels, `1.0` by default. High values emphasize large details and low values emphasize small details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#sigma_var DataAkamaiImagingPolicyImage#sigma_var}
  */
  readonly sigmaVar?: string;
  /**
  * Set the minimum change required to include a detail in the filter. Higher values discard more changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#threshold DataAkamaiImagingPolicyImage#threshold}
  */
  readonly threshold?: string;
  /**
  * Set the minimum change required to include a detail in the filter. Higher values discard more changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#threshold_var DataAkamaiImagingPolicyImage#threshold_var}
  */
  readonly thresholdVar?: string;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMaskToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gain: cdktf.stringToTerraform(struct!.gain),
    gain_var: cdktf.stringToTerraform(struct!.gainVar),
    sigma: cdktf.stringToTerraform(struct!.sigma),
    sigma_var: cdktf.stringToTerraform(struct!.sigmaVar),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    threshold_var: cdktf.stringToTerraform(struct!.thresholdVar),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMaskToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gain: {
      value: cdktf.stringToHclTerraform(struct!.gain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gain_var: {
      value: cdktf.stringToHclTerraform(struct!.gainVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sigma: {
      value: cdktf.stringToHclTerraform(struct!.sigma),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sigma_var: {
      value: cdktf.stringToHclTerraform(struct!.sigmaVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_var: {
      value: cdktf.stringToHclTerraform(struct!.thresholdVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gain !== undefined) {
      hasAnyValues = true;
      internalValueResult.gain = this._gain;
    }
    if (this._gainVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.gainVar = this._gainVar;
    }
    if (this._sigma !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigma = this._sigma;
    }
    if (this._sigmaVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigmaVar = this._sigmaVar;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdVar = this._thresholdVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gain = undefined;
      this._gainVar = undefined;
      this._sigma = undefined;
      this._sigmaVar = undefined;
      this._threshold = undefined;
      this._thresholdVar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gain = value.gain;
      this._gainVar = value.gainVar;
      this._sigma = value.sigma;
      this._sigmaVar = value.sigmaVar;
      this._threshold = value.threshold;
      this._thresholdVar = value.thresholdVar;
    }
  }

  // gain - computed: false, optional: true, required: false
  private _gain?: string; 
  public get gain() {
    return this.getStringAttribute('gain');
  }
  public set gain(value: string) {
    this._gain = value;
  }
  public resetGain() {
    this._gain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gainInput() {
    return this._gain;
  }

  // gain_var - computed: false, optional: true, required: false
  private _gainVar?: string; 
  public get gainVar() {
    return this.getStringAttribute('gain_var');
  }
  public set gainVar(value: string) {
    this._gainVar = value;
  }
  public resetGainVar() {
    this._gainVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gainVarInput() {
    return this._gainVar;
  }

  // sigma - computed: false, optional: true, required: false
  private _sigma?: string; 
  public get sigma() {
    return this.getStringAttribute('sigma');
  }
  public set sigma(value: string) {
    this._sigma = value;
  }
  public resetSigma() {
    this._sigma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigmaInput() {
    return this._sigma;
  }

  // sigma_var - computed: false, optional: true, required: false
  private _sigmaVar?: string; 
  public get sigmaVar() {
    return this.getStringAttribute('sigma_var');
  }
  public set sigmaVar(value: string) {
    this._sigmaVar = value;
  }
  public resetSigmaVar() {
    this._sigmaVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigmaVarInput() {
    return this._sigmaVar;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_var - computed: false, optional: true, required: false
  private _thresholdVar?: string; 
  public get thresholdVar() {
    return this.getStringAttribute('threshold_var');
  }
  public set thresholdVar(value: string) {
    this._thresholdVar = value;
  }
  public resetThresholdVar() {
    this._thresholdVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdVarInput() {
    return this._thresholdVar;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMaskList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMask[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMaskOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyTransformations {
  /**
  * append block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#append DataAkamaiImagingPolicyImage#append}
  */
  readonly append?: DataAkamaiImagingPolicyImagePolicyTransformationsAppend[] | cdktf.IResolvable;
  /**
  * aspect_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#aspect_crop DataAkamaiImagingPolicyImage#aspect_crop}
  */
  readonly aspectCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsAspectCrop[] | cdktf.IResolvable;
  /**
  * background_color block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#background_color DataAkamaiImagingPolicyImage#background_color}
  */
  readonly backgroundColor?: DataAkamaiImagingPolicyImagePolicyTransformationsBackgroundColor[] | cdktf.IResolvable;
  /**
  * blur block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#blur DataAkamaiImagingPolicyImage#blur}
  */
  readonly blur?: DataAkamaiImagingPolicyImagePolicyTransformationsBlur[] | cdktf.IResolvable;
  /**
  * chroma_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#chroma_key DataAkamaiImagingPolicyImage#chroma_key}
  */
  readonly chromaKey?: DataAkamaiImagingPolicyImagePolicyTransformationsChromaKey[] | cdktf.IResolvable;
  /**
  * composite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#composite DataAkamaiImagingPolicyImage#composite}
  */
  readonly composite?: DataAkamaiImagingPolicyImagePolicyTransformationsComposite[] | cdktf.IResolvable;
  /**
  * compound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#compound DataAkamaiImagingPolicyImage#compound}
  */
  readonly compound?: DataAkamaiImagingPolicyImagePolicyTransformationsCompound[] | cdktf.IResolvable;
  /**
  * contrast block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#contrast DataAkamaiImagingPolicyImage#contrast}
  */
  readonly contrast?: DataAkamaiImagingPolicyImagePolicyTransformationsContrast[] | cdktf.IResolvable;
  /**
  * crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#crop DataAkamaiImagingPolicyImage#crop}
  */
  readonly crop?: DataAkamaiImagingPolicyImagePolicyTransformationsCrop[] | cdktf.IResolvable;
  /**
  * face_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#face_crop DataAkamaiImagingPolicyImage#face_crop}
  */
  readonly faceCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsFaceCrop[] | cdktf.IResolvable;
  /**
  * feature_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#feature_crop DataAkamaiImagingPolicyImage#feature_crop}
  */
  readonly featureCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsFeatureCrop[] | cdktf.IResolvable;
  /**
  * fit_and_fill block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#fit_and_fill DataAkamaiImagingPolicyImage#fit_and_fill}
  */
  readonly fitAndFill?: DataAkamaiImagingPolicyImagePolicyTransformationsFitAndFill[] | cdktf.IResolvable;
  /**
  * goop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#goop DataAkamaiImagingPolicyImage#goop}
  */
  readonly goop?: DataAkamaiImagingPolicyImagePolicyTransformationsGoop[] | cdktf.IResolvable;
  /**
  * grayscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#grayscale DataAkamaiImagingPolicyImage#grayscale}
  */
  readonly grayscale?: DataAkamaiImagingPolicyImagePolicyTransformationsGrayscale[] | cdktf.IResolvable;
  /**
  * hsl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#hsl DataAkamaiImagingPolicyImage#hsl}
  */
  readonly hsl?: DataAkamaiImagingPolicyImagePolicyTransformationsHsl[] | cdktf.IResolvable;
  /**
  * hsv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#hsv DataAkamaiImagingPolicyImage#hsv}
  */
  readonly hsv?: DataAkamaiImagingPolicyImagePolicyTransformationsHsv[] | cdktf.IResolvable;
  /**
  * if_dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#if_dimension DataAkamaiImagingPolicyImage#if_dimension}
  */
  readonly ifDimension?: DataAkamaiImagingPolicyImagePolicyTransformationsIfDimension[] | cdktf.IResolvable;
  /**
  * if_orientation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#if_orientation DataAkamaiImagingPolicyImage#if_orientation}
  */
  readonly ifOrientation?: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientation[] | cdktf.IResolvable;
  /**
  * im_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#im_query DataAkamaiImagingPolicyImage#im_query}
  */
  readonly imQuery?: DataAkamaiImagingPolicyImagePolicyTransformationsImQuery[] | cdktf.IResolvable;
  /**
  * max_colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#max_colors DataAkamaiImagingPolicyImage#max_colors}
  */
  readonly maxColors?: DataAkamaiImagingPolicyImagePolicyTransformationsMaxColors[] | cdktf.IResolvable;
  /**
  * mirror block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#mirror DataAkamaiImagingPolicyImage#mirror}
  */
  readonly mirror?: DataAkamaiImagingPolicyImagePolicyTransformationsMirror[] | cdktf.IResolvable;
  /**
  * mono_hue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#mono_hue DataAkamaiImagingPolicyImage#mono_hue}
  */
  readonly monoHue?: DataAkamaiImagingPolicyImagePolicyTransformationsMonoHue[] | cdktf.IResolvable;
  /**
  * opacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#opacity DataAkamaiImagingPolicyImage#opacity}
  */
  readonly opacity?: DataAkamaiImagingPolicyImagePolicyTransformationsOpacity[] | cdktf.IResolvable;
  /**
  * region_of_interest_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#region_of_interest_crop DataAkamaiImagingPolicyImage#region_of_interest_crop}
  */
  readonly regionOfInterestCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCrop[] | cdktf.IResolvable;
  /**
  * relative_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#relative_crop DataAkamaiImagingPolicyImage#relative_crop}
  */
  readonly relativeCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCrop[] | cdktf.IResolvable;
  /**
  * remove_color block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#remove_color DataAkamaiImagingPolicyImage#remove_color}
  */
  readonly removeColor?: DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColor[] | cdktf.IResolvable;
  /**
  * resize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#resize DataAkamaiImagingPolicyImage#resize}
  */
  readonly resize?: DataAkamaiImagingPolicyImagePolicyTransformationsResize[] | cdktf.IResolvable;
  /**
  * rotate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#rotate DataAkamaiImagingPolicyImage#rotate}
  */
  readonly rotate?: DataAkamaiImagingPolicyImagePolicyTransformationsRotate[] | cdktf.IResolvable;
  /**
  * scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#scale DataAkamaiImagingPolicyImage#scale}
  */
  readonly scale?: DataAkamaiImagingPolicyImagePolicyTransformationsScale[] | cdktf.IResolvable;
  /**
  * shear block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#shear DataAkamaiImagingPolicyImage#shear}
  */
  readonly shear?: DataAkamaiImagingPolicyImagePolicyTransformationsShear[] | cdktf.IResolvable;
  /**
  * smart_crop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#smart_crop DataAkamaiImagingPolicyImage#smart_crop}
  */
  readonly smartCrop?: DataAkamaiImagingPolicyImagePolicyTransformationsSmartCrop[] | cdktf.IResolvable;
  /**
  * trim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#trim DataAkamaiImagingPolicyImage#trim}
  */
  readonly trim?: DataAkamaiImagingPolicyImagePolicyTransformationsTrim[] | cdktf.IResolvable;
  /**
  * unsharp_mask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#unsharp_mask DataAkamaiImagingPolicyImage#unsharp_mask}
  */
  readonly unsharpMask?: DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMask[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyImagePolicyTransformationsToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsAppendToTerraform, true)(struct!.append),
    aspect_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsAspectCropToTerraform, true)(struct!.aspectCrop),
    background_color: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsBackgroundColorToTerraform, true)(struct!.backgroundColor),
    blur: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsBlurToTerraform, true)(struct!.blur),
    chroma_key: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsChromaKeyToTerraform, true)(struct!.chromaKey),
    composite: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsCompositeToTerraform, true)(struct!.composite),
    compound: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsCompoundToTerraform, true)(struct!.compound),
    contrast: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsContrastToTerraform, true)(struct!.contrast),
    crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsCropToTerraform, true)(struct!.crop),
    face_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsFaceCropToTerraform, true)(struct!.faceCrop),
    feature_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsFeatureCropToTerraform, true)(struct!.featureCrop),
    fit_and_fill: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsFitAndFillToTerraform, true)(struct!.fitAndFill),
    goop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsGoopToTerraform, true)(struct!.goop),
    grayscale: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsGrayscaleToTerraform, true)(struct!.grayscale),
    hsl: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsHslToTerraform, true)(struct!.hsl),
    hsv: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsHsvToTerraform, true)(struct!.hsv),
    if_dimension: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfDimensionToTerraform, true)(struct!.ifDimension),
    if_orientation: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationToTerraform, true)(struct!.ifOrientation),
    im_query: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsImQueryToTerraform, true)(struct!.imQuery),
    max_colors: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsMaxColorsToTerraform, true)(struct!.maxColors),
    mirror: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsMirrorToTerraform, true)(struct!.mirror),
    mono_hue: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsMonoHueToTerraform, true)(struct!.monoHue),
    opacity: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsOpacityToTerraform, true)(struct!.opacity),
    region_of_interest_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropToTerraform, true)(struct!.regionOfInterestCrop),
    relative_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRelativeCropToTerraform, true)(struct!.relativeCrop),
    remove_color: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRemoveColorToTerraform, true)(struct!.removeColor),
    resize: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsResizeToTerraform, true)(struct!.resize),
    rotate: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsRotateToTerraform, true)(struct!.rotate),
    scale: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsScaleToTerraform, true)(struct!.scale),
    shear: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsShearToTerraform, true)(struct!.shear),
    smart_crop: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsSmartCropToTerraform, true)(struct!.smartCrop),
    trim: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsTrimToTerraform, true)(struct!.trim),
    unsharp_mask: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMaskToTerraform, true)(struct!.unsharpMask),
  }
}


export function dataAkamaiImagingPolicyImagePolicyTransformationsToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsAppendToHclTerraform, true)(struct!.append),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsAppendList",
    },
    aspect_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsAspectCropToHclTerraform, true)(struct!.aspectCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsAspectCropList",
    },
    background_color: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsBackgroundColorToHclTerraform, true)(struct!.backgroundColor),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsBackgroundColorList",
    },
    blur: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsBlurToHclTerraform, true)(struct!.blur),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsBlurList",
    },
    chroma_key: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsChromaKeyToHclTerraform, true)(struct!.chromaKey),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsChromaKeyList",
    },
    composite: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsCompositeToHclTerraform, true)(struct!.composite),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsCompositeList",
    },
    compound: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsCompoundToHclTerraform, true)(struct!.compound),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsCompoundList",
    },
    contrast: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsContrastToHclTerraform, true)(struct!.contrast),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsContrastList",
    },
    crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsCropToHclTerraform, true)(struct!.crop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsCropList",
    },
    face_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsFaceCropToHclTerraform, true)(struct!.faceCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsFaceCropList",
    },
    feature_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsFeatureCropToHclTerraform, true)(struct!.featureCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsFeatureCropList",
    },
    fit_and_fill: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsFitAndFillToHclTerraform, true)(struct!.fitAndFill),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsFitAndFillList",
    },
    goop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsGoopToHclTerraform, true)(struct!.goop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsGoopList",
    },
    grayscale: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsGrayscaleToHclTerraform, true)(struct!.grayscale),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsGrayscaleList",
    },
    hsl: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsHslToHclTerraform, true)(struct!.hsl),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsHslList",
    },
    hsv: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsHsvToHclTerraform, true)(struct!.hsv),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsHsvList",
    },
    if_dimension: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfDimensionToHclTerraform, true)(struct!.ifDimension),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfDimensionList",
    },
    if_orientation: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationToHclTerraform, true)(struct!.ifOrientation),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationList",
    },
    im_query: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsImQueryToHclTerraform, true)(struct!.imQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsImQueryList",
    },
    max_colors: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsMaxColorsToHclTerraform, true)(struct!.maxColors),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsMaxColorsList",
    },
    mirror: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsMirrorToHclTerraform, true)(struct!.mirror),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsMirrorList",
    },
    mono_hue: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsMonoHueToHclTerraform, true)(struct!.monoHue),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsMonoHueList",
    },
    opacity: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsOpacityToHclTerraform, true)(struct!.opacity),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsOpacityList",
    },
    region_of_interest_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropToHclTerraform, true)(struct!.regionOfInterestCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropList",
    },
    relative_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRelativeCropToHclTerraform, true)(struct!.relativeCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCropList",
    },
    remove_color: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRemoveColorToHclTerraform, true)(struct!.removeColor),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColorList",
    },
    resize: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsResizeToHclTerraform, true)(struct!.resize),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsResizeList",
    },
    rotate: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsRotateToHclTerraform, true)(struct!.rotate),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsRotateList",
    },
    scale: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsScaleToHclTerraform, true)(struct!.scale),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsScaleList",
    },
    shear: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsShearToHclTerraform, true)(struct!.shear),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsShearList",
    },
    smart_crop: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsSmartCropToHclTerraform, true)(struct!.smartCrop),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsSmartCropList",
    },
    trim: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsTrimToHclTerraform, true)(struct!.trim),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsTrimList",
    },
    unsharp_mask: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMaskToHclTerraform, true)(struct!.unsharpMask),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyTransformations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append?.internalValue;
    }
    if (this._aspectCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspectCrop = this._aspectCrop?.internalValue;
    }
    if (this._backgroundColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor?.internalValue;
    }
    if (this._blur?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blur = this._blur?.internalValue;
    }
    if (this._chromaKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chromaKey = this._chromaKey?.internalValue;
    }
    if (this._composite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite?.internalValue;
    }
    if (this._compound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compound = this._compound?.internalValue;
    }
    if (this._contrast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contrast = this._contrast?.internalValue;
    }
    if (this._crop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crop = this._crop?.internalValue;
    }
    if (this._faceCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceCrop = this._faceCrop?.internalValue;
    }
    if (this._featureCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureCrop = this._featureCrop?.internalValue;
    }
    if (this._fitAndFill?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fitAndFill = this._fitAndFill?.internalValue;
    }
    if (this._goop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goop = this._goop?.internalValue;
    }
    if (this._grayscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grayscale = this._grayscale?.internalValue;
    }
    if (this._hsl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsl = this._hsl?.internalValue;
    }
    if (this._hsv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsv = this._hsv?.internalValue;
    }
    if (this._ifDimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifDimension = this._ifDimension?.internalValue;
    }
    if (this._ifOrientation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifOrientation = this._ifOrientation?.internalValue;
    }
    if (this._imQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imQuery = this._imQuery?.internalValue;
    }
    if (this._maxColors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxColors = this._maxColors?.internalValue;
    }
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    if (this._monoHue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monoHue = this._monoHue?.internalValue;
    }
    if (this._opacity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacity = this._opacity?.internalValue;
    }
    if (this._regionOfInterestCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionOfInterestCrop = this._regionOfInterestCrop?.internalValue;
    }
    if (this._relativeCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeCrop = this._relativeCrop?.internalValue;
    }
    if (this._removeColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeColor = this._removeColor?.internalValue;
    }
    if (this._resize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resize = this._resize?.internalValue;
    }
    if (this._rotate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotate = this._rotate?.internalValue;
    }
    if (this._scale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale?.internalValue;
    }
    if (this._shear?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shear = this._shear?.internalValue;
    }
    if (this._smartCrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartCrop = this._smartCrop?.internalValue;
    }
    if (this._trim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trim = this._trim?.internalValue;
    }
    if (this._unsharpMask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsharpMask = this._unsharpMask?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyTransformations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append.internalValue = undefined;
      this._aspectCrop.internalValue = undefined;
      this._backgroundColor.internalValue = undefined;
      this._blur.internalValue = undefined;
      this._chromaKey.internalValue = undefined;
      this._composite.internalValue = undefined;
      this._compound.internalValue = undefined;
      this._contrast.internalValue = undefined;
      this._crop.internalValue = undefined;
      this._faceCrop.internalValue = undefined;
      this._featureCrop.internalValue = undefined;
      this._fitAndFill.internalValue = undefined;
      this._goop.internalValue = undefined;
      this._grayscale.internalValue = undefined;
      this._hsl.internalValue = undefined;
      this._hsv.internalValue = undefined;
      this._ifDimension.internalValue = undefined;
      this._ifOrientation.internalValue = undefined;
      this._imQuery.internalValue = undefined;
      this._maxColors.internalValue = undefined;
      this._mirror.internalValue = undefined;
      this._monoHue.internalValue = undefined;
      this._opacity.internalValue = undefined;
      this._regionOfInterestCrop.internalValue = undefined;
      this._relativeCrop.internalValue = undefined;
      this._removeColor.internalValue = undefined;
      this._resize.internalValue = undefined;
      this._rotate.internalValue = undefined;
      this._scale.internalValue = undefined;
      this._shear.internalValue = undefined;
      this._smartCrop.internalValue = undefined;
      this._trim.internalValue = undefined;
      this._unsharpMask.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append.internalValue = value.append;
      this._aspectCrop.internalValue = value.aspectCrop;
      this._backgroundColor.internalValue = value.backgroundColor;
      this._blur.internalValue = value.blur;
      this._chromaKey.internalValue = value.chromaKey;
      this._composite.internalValue = value.composite;
      this._compound.internalValue = value.compound;
      this._contrast.internalValue = value.contrast;
      this._crop.internalValue = value.crop;
      this._faceCrop.internalValue = value.faceCrop;
      this._featureCrop.internalValue = value.featureCrop;
      this._fitAndFill.internalValue = value.fitAndFill;
      this._goop.internalValue = value.goop;
      this._grayscale.internalValue = value.grayscale;
      this._hsl.internalValue = value.hsl;
      this._hsv.internalValue = value.hsv;
      this._ifDimension.internalValue = value.ifDimension;
      this._ifOrientation.internalValue = value.ifOrientation;
      this._imQuery.internalValue = value.imQuery;
      this._maxColors.internalValue = value.maxColors;
      this._mirror.internalValue = value.mirror;
      this._monoHue.internalValue = value.monoHue;
      this._opacity.internalValue = value.opacity;
      this._regionOfInterestCrop.internalValue = value.regionOfInterestCrop;
      this._relativeCrop.internalValue = value.relativeCrop;
      this._removeColor.internalValue = value.removeColor;
      this._resize.internalValue = value.resize;
      this._rotate.internalValue = value.rotate;
      this._scale.internalValue = value.scale;
      this._shear.internalValue = value.shear;
      this._smartCrop.internalValue = value.smartCrop;
      this._trim.internalValue = value.trim;
      this._unsharpMask.internalValue = value.unsharpMask;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append = new DataAkamaiImagingPolicyImagePolicyTransformationsAppendList(this, "append", false);
  public get append() {
    return this._append;
  }
  public putAppend(value: DataAkamaiImagingPolicyImagePolicyTransformationsAppend[] | cdktf.IResolvable) {
    this._append.internalValue = value;
  }
  public resetAppend() {
    this._append.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append.internalValue;
  }

  // aspect_crop - computed: false, optional: true, required: false
  private _aspectCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsAspectCropList(this, "aspect_crop", false);
  public get aspectCrop() {
    return this._aspectCrop;
  }
  public putAspectCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsAspectCrop[] | cdktf.IResolvable) {
    this._aspectCrop.internalValue = value;
  }
  public resetAspectCrop() {
    this._aspectCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectCropInput() {
    return this._aspectCrop.internalValue;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor = new DataAkamaiImagingPolicyImagePolicyTransformationsBackgroundColorList(this, "background_color", false);
  public get backgroundColor() {
    return this._backgroundColor;
  }
  public putBackgroundColor(value: DataAkamaiImagingPolicyImagePolicyTransformationsBackgroundColor[] | cdktf.IResolvable) {
    this._backgroundColor.internalValue = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor.internalValue;
  }

  // blur - computed: false, optional: true, required: false
  private _blur = new DataAkamaiImagingPolicyImagePolicyTransformationsBlurList(this, "blur", false);
  public get blur() {
    return this._blur;
  }
  public putBlur(value: DataAkamaiImagingPolicyImagePolicyTransformationsBlur[] | cdktf.IResolvable) {
    this._blur.internalValue = value;
  }
  public resetBlur() {
    this._blur.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blurInput() {
    return this._blur.internalValue;
  }

  // chroma_key - computed: false, optional: true, required: false
  private _chromaKey = new DataAkamaiImagingPolicyImagePolicyTransformationsChromaKeyList(this, "chroma_key", false);
  public get chromaKey() {
    return this._chromaKey;
  }
  public putChromaKey(value: DataAkamaiImagingPolicyImagePolicyTransformationsChromaKey[] | cdktf.IResolvable) {
    this._chromaKey.internalValue = value;
  }
  public resetChromaKey() {
    this._chromaKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chromaKeyInput() {
    return this._chromaKey.internalValue;
  }

  // composite - computed: false, optional: true, required: false
  private _composite = new DataAkamaiImagingPolicyImagePolicyTransformationsCompositeList(this, "composite", false);
  public get composite() {
    return this._composite;
  }
  public putComposite(value: DataAkamaiImagingPolicyImagePolicyTransformationsComposite[] | cdktf.IResolvable) {
    this._composite.internalValue = value;
  }
  public resetComposite() {
    this._composite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite.internalValue;
  }

  // compound - computed: false, optional: true, required: false
  private _compound = new DataAkamaiImagingPolicyImagePolicyTransformationsCompoundList(this, "compound", false);
  public get compound() {
    return this._compound;
  }
  public putCompound(value: DataAkamaiImagingPolicyImagePolicyTransformationsCompound[] | cdktf.IResolvable) {
    this._compound.internalValue = value;
  }
  public resetCompound() {
    this._compound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compoundInput() {
    return this._compound.internalValue;
  }

  // contrast - computed: false, optional: true, required: false
  private _contrast = new DataAkamaiImagingPolicyImagePolicyTransformationsContrastList(this, "contrast", false);
  public get contrast() {
    return this._contrast;
  }
  public putContrast(value: DataAkamaiImagingPolicyImagePolicyTransformationsContrast[] | cdktf.IResolvable) {
    this._contrast.internalValue = value;
  }
  public resetContrast() {
    this._contrast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contrastInput() {
    return this._contrast.internalValue;
  }

  // crop - computed: false, optional: true, required: false
  private _crop = new DataAkamaiImagingPolicyImagePolicyTransformationsCropList(this, "crop", false);
  public get crop() {
    return this._crop;
  }
  public putCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsCrop[] | cdktf.IResolvable) {
    this._crop.internalValue = value;
  }
  public resetCrop() {
    this._crop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cropInput() {
    return this._crop.internalValue;
  }

  // face_crop - computed: false, optional: true, required: false
  private _faceCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsFaceCropList(this, "face_crop", false);
  public get faceCrop() {
    return this._faceCrop;
  }
  public putFaceCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsFaceCrop[] | cdktf.IResolvable) {
    this._faceCrop.internalValue = value;
  }
  public resetFaceCrop() {
    this._faceCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceCropInput() {
    return this._faceCrop.internalValue;
  }

  // feature_crop - computed: false, optional: true, required: false
  private _featureCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsFeatureCropList(this, "feature_crop", false);
  public get featureCrop() {
    return this._featureCrop;
  }
  public putFeatureCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsFeatureCrop[] | cdktf.IResolvable) {
    this._featureCrop.internalValue = value;
  }
  public resetFeatureCrop() {
    this._featureCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureCropInput() {
    return this._featureCrop.internalValue;
  }

  // fit_and_fill - computed: false, optional: true, required: false
  private _fitAndFill = new DataAkamaiImagingPolicyImagePolicyTransformationsFitAndFillList(this, "fit_and_fill", false);
  public get fitAndFill() {
    return this._fitAndFill;
  }
  public putFitAndFill(value: DataAkamaiImagingPolicyImagePolicyTransformationsFitAndFill[] | cdktf.IResolvable) {
    this._fitAndFill.internalValue = value;
  }
  public resetFitAndFill() {
    this._fitAndFill.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fitAndFillInput() {
    return this._fitAndFill.internalValue;
  }

  // goop - computed: false, optional: true, required: false
  private _goop = new DataAkamaiImagingPolicyImagePolicyTransformationsGoopList(this, "goop", false);
  public get goop() {
    return this._goop;
  }
  public putGoop(value: DataAkamaiImagingPolicyImagePolicyTransformationsGoop[] | cdktf.IResolvable) {
    this._goop.internalValue = value;
  }
  public resetGoop() {
    this._goop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goopInput() {
    return this._goop.internalValue;
  }

  // grayscale - computed: false, optional: true, required: false
  private _grayscale = new DataAkamaiImagingPolicyImagePolicyTransformationsGrayscaleList(this, "grayscale", false);
  public get grayscale() {
    return this._grayscale;
  }
  public putGrayscale(value: DataAkamaiImagingPolicyImagePolicyTransformationsGrayscale[] | cdktf.IResolvable) {
    this._grayscale.internalValue = value;
  }
  public resetGrayscale() {
    this._grayscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grayscaleInput() {
    return this._grayscale.internalValue;
  }

  // hsl - computed: false, optional: true, required: false
  private _hsl = new DataAkamaiImagingPolicyImagePolicyTransformationsHslList(this, "hsl", false);
  public get hsl() {
    return this._hsl;
  }
  public putHsl(value: DataAkamaiImagingPolicyImagePolicyTransformationsHsl[] | cdktf.IResolvable) {
    this._hsl.internalValue = value;
  }
  public resetHsl() {
    this._hsl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hslInput() {
    return this._hsl.internalValue;
  }

  // hsv - computed: false, optional: true, required: false
  private _hsv = new DataAkamaiImagingPolicyImagePolicyTransformationsHsvList(this, "hsv", false);
  public get hsv() {
    return this._hsv;
  }
  public putHsv(value: DataAkamaiImagingPolicyImagePolicyTransformationsHsv[] | cdktf.IResolvable) {
    this._hsv.internalValue = value;
  }
  public resetHsv() {
    this._hsv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsvInput() {
    return this._hsv.internalValue;
  }

  // if_dimension - computed: false, optional: true, required: false
  private _ifDimension = new DataAkamaiImagingPolicyImagePolicyTransformationsIfDimensionList(this, "if_dimension", false);
  public get ifDimension() {
    return this._ifDimension;
  }
  public putIfDimension(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfDimension[] | cdktf.IResolvable) {
    this._ifDimension.internalValue = value;
  }
  public resetIfDimension() {
    this._ifDimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifDimensionInput() {
    return this._ifDimension.internalValue;
  }

  // if_orientation - computed: false, optional: true, required: false
  private _ifOrientation = new DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientationList(this, "if_orientation", false);
  public get ifOrientation() {
    return this._ifOrientation;
  }
  public putIfOrientation(value: DataAkamaiImagingPolicyImagePolicyTransformationsIfOrientation[] | cdktf.IResolvable) {
    this._ifOrientation.internalValue = value;
  }
  public resetIfOrientation() {
    this._ifOrientation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifOrientationInput() {
    return this._ifOrientation.internalValue;
  }

  // im_query - computed: false, optional: true, required: false
  private _imQuery = new DataAkamaiImagingPolicyImagePolicyTransformationsImQueryList(this, "im_query", false);
  public get imQuery() {
    return this._imQuery;
  }
  public putImQuery(value: DataAkamaiImagingPolicyImagePolicyTransformationsImQuery[] | cdktf.IResolvable) {
    this._imQuery.internalValue = value;
  }
  public resetImQuery() {
    this._imQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imQueryInput() {
    return this._imQuery.internalValue;
  }

  // max_colors - computed: false, optional: true, required: false
  private _maxColors = new DataAkamaiImagingPolicyImagePolicyTransformationsMaxColorsList(this, "max_colors", false);
  public get maxColors() {
    return this._maxColors;
  }
  public putMaxColors(value: DataAkamaiImagingPolicyImagePolicyTransformationsMaxColors[] | cdktf.IResolvable) {
    this._maxColors.internalValue = value;
  }
  public resetMaxColors() {
    this._maxColors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxColorsInput() {
    return this._maxColors.internalValue;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new DataAkamaiImagingPolicyImagePolicyTransformationsMirrorList(this, "mirror", false);
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataAkamaiImagingPolicyImagePolicyTransformationsMirror[] | cdktf.IResolvable) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }

  // mono_hue - computed: false, optional: true, required: false
  private _monoHue = new DataAkamaiImagingPolicyImagePolicyTransformationsMonoHueList(this, "mono_hue", false);
  public get monoHue() {
    return this._monoHue;
  }
  public putMonoHue(value: DataAkamaiImagingPolicyImagePolicyTransformationsMonoHue[] | cdktf.IResolvable) {
    this._monoHue.internalValue = value;
  }
  public resetMonoHue() {
    this._monoHue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monoHueInput() {
    return this._monoHue.internalValue;
  }

  // opacity - computed: false, optional: true, required: false
  private _opacity = new DataAkamaiImagingPolicyImagePolicyTransformationsOpacityList(this, "opacity", false);
  public get opacity() {
    return this._opacity;
  }
  public putOpacity(value: DataAkamaiImagingPolicyImagePolicyTransformationsOpacity[] | cdktf.IResolvable) {
    this._opacity.internalValue = value;
  }
  public resetOpacity() {
    this._opacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity.internalValue;
  }

  // region_of_interest_crop - computed: false, optional: true, required: false
  private _regionOfInterestCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCropList(this, "region_of_interest_crop", false);
  public get regionOfInterestCrop() {
    return this._regionOfInterestCrop;
  }
  public putRegionOfInterestCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsRegionOfInterestCrop[] | cdktf.IResolvable) {
    this._regionOfInterestCrop.internalValue = value;
  }
  public resetRegionOfInterestCrop() {
    this._regionOfInterestCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionOfInterestCropInput() {
    return this._regionOfInterestCrop.internalValue;
  }

  // relative_crop - computed: false, optional: true, required: false
  private _relativeCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCropList(this, "relative_crop", false);
  public get relativeCrop() {
    return this._relativeCrop;
  }
  public putRelativeCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsRelativeCrop[] | cdktf.IResolvable) {
    this._relativeCrop.internalValue = value;
  }
  public resetRelativeCrop() {
    this._relativeCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeCropInput() {
    return this._relativeCrop.internalValue;
  }

  // remove_color - computed: false, optional: true, required: false
  private _removeColor = new DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColorList(this, "remove_color", false);
  public get removeColor() {
    return this._removeColor;
  }
  public putRemoveColor(value: DataAkamaiImagingPolicyImagePolicyTransformationsRemoveColor[] | cdktf.IResolvable) {
    this._removeColor.internalValue = value;
  }
  public resetRemoveColor() {
    this._removeColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeColorInput() {
    return this._removeColor.internalValue;
  }

  // resize - computed: false, optional: true, required: false
  private _resize = new DataAkamaiImagingPolicyImagePolicyTransformationsResizeList(this, "resize", false);
  public get resize() {
    return this._resize;
  }
  public putResize(value: DataAkamaiImagingPolicyImagePolicyTransformationsResize[] | cdktf.IResolvable) {
    this._resize.internalValue = value;
  }
  public resetResize() {
    this._resize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeInput() {
    return this._resize.internalValue;
  }

  // rotate - computed: false, optional: true, required: false
  private _rotate = new DataAkamaiImagingPolicyImagePolicyTransformationsRotateList(this, "rotate", false);
  public get rotate() {
    return this._rotate;
  }
  public putRotate(value: DataAkamaiImagingPolicyImagePolicyTransformationsRotate[] | cdktf.IResolvable) {
    this._rotate.internalValue = value;
  }
  public resetRotate() {
    this._rotate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateInput() {
    return this._rotate.internalValue;
  }

  // scale - computed: false, optional: true, required: false
  private _scale = new DataAkamaiImagingPolicyImagePolicyTransformationsScaleList(this, "scale", false);
  public get scale() {
    return this._scale;
  }
  public putScale(value: DataAkamaiImagingPolicyImagePolicyTransformationsScale[] | cdktf.IResolvable) {
    this._scale.internalValue = value;
  }
  public resetScale() {
    this._scale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale.internalValue;
  }

  // shear - computed: false, optional: true, required: false
  private _shear = new DataAkamaiImagingPolicyImagePolicyTransformationsShearList(this, "shear", false);
  public get shear() {
    return this._shear;
  }
  public putShear(value: DataAkamaiImagingPolicyImagePolicyTransformationsShear[] | cdktf.IResolvable) {
    this._shear.internalValue = value;
  }
  public resetShear() {
    this._shear.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shearInput() {
    return this._shear.internalValue;
  }

  // smart_crop - computed: false, optional: true, required: false
  private _smartCrop = new DataAkamaiImagingPolicyImagePolicyTransformationsSmartCropList(this, "smart_crop", false);
  public get smartCrop() {
    return this._smartCrop;
  }
  public putSmartCrop(value: DataAkamaiImagingPolicyImagePolicyTransformationsSmartCrop[] | cdktf.IResolvable) {
    this._smartCrop.internalValue = value;
  }
  public resetSmartCrop() {
    this._smartCrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartCropInput() {
    return this._smartCrop.internalValue;
  }

  // trim - computed: false, optional: true, required: false
  private _trim = new DataAkamaiImagingPolicyImagePolicyTransformationsTrimList(this, "trim", false);
  public get trim() {
    return this._trim;
  }
  public putTrim(value: DataAkamaiImagingPolicyImagePolicyTransformationsTrim[] | cdktf.IResolvable) {
    this._trim.internalValue = value;
  }
  public resetTrim() {
    this._trim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimInput() {
    return this._trim.internalValue;
  }

  // unsharp_mask - computed: false, optional: true, required: false
  private _unsharpMask = new DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMaskList(this, "unsharp_mask", false);
  public get unsharpMask() {
    return this._unsharpMask;
  }
  public putUnsharpMask(value: DataAkamaiImagingPolicyImagePolicyTransformationsUnsharpMask[] | cdktf.IResolvable) {
    this._unsharpMask.internalValue = value;
  }
  public resetUnsharpMask() {
    this._unsharpMask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsharpMaskInput() {
    return this._unsharpMask.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyTransformationsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyTransformations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyTransformationsOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyVariablesEnumOptions {
  /**
  * The unique identifier for each enum value, up to 50 alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#id DataAkamaiImagingPolicyImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The value of the variable when the `id` is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#value DataAkamaiImagingPolicyImage#value}
  */
  readonly value: string;
}

export function dataAkamaiImagingPolicyImagePolicyVariablesEnumOptionsToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyVariablesEnumOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataAkamaiImagingPolicyImagePolicyVariablesEnumOptionsToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyVariablesEnumOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyVariablesEnumOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyVariablesEnumOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyVariablesEnumOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._value = value.value;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataAkamaiImagingPolicyImagePolicyVariablesEnumOptionsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyVariablesEnumOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyVariablesEnumOptionsOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyVariablesEnumOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicyVariables {
  /**
  * The default value of the variable if no query parameter is provided. It needs to be one of the `enumOptions` if any are provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#default_value DataAkamaiImagingPolicyImage#default_value}
  */
  readonly defaultValue: string;
  /**
  * The name of the variable, also available as the query parameter name to set the variable's value dynamically. Use up to 50 alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#name DataAkamaiImagingPolicyImage#name}
  */
  readonly name: string;
  /**
  * A postfix added to the value provided for the variable, or to the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#postfix DataAkamaiImagingPolicyImage#postfix}
  */
  readonly postfix?: string;
  /**
  * A prefix added to the value provided for the variable, or to the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#prefix DataAkamaiImagingPolicyImage#prefix}
  */
  readonly prefix?: string;
  /**
  * The type of value for the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#type DataAkamaiImagingPolicyImage#type}
  */
  readonly type: string;
  /**
  * enum_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#enum_options DataAkamaiImagingPolicyImage#enum_options}
  */
  readonly enumOptions?: DataAkamaiImagingPolicyImagePolicyVariablesEnumOptions[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyImagePolicyVariablesToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
    postfix: cdktf.stringToTerraform(struct!.postfix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    type: cdktf.stringToTerraform(struct!.type),
    enum_options: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyVariablesEnumOptionsToTerraform, true)(struct!.enumOptions),
  }
}


export function dataAkamaiImagingPolicyImagePolicyVariablesToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postfix: {
      value: cdktf.stringToHclTerraform(struct!.postfix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum_options: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyVariablesEnumOptionsToHclTerraform, true)(struct!.enumOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyVariablesEnumOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicyVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._postfix !== undefined) {
      hasAnyValues = true;
      internalValueResult.postfix = this._postfix;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._enumOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumOptions = this._enumOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicyVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._name = undefined;
      this._postfix = undefined;
      this._prefix = undefined;
      this._type = undefined;
      this._enumOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._name = value.name;
      this._postfix = value.postfix;
      this._prefix = value.prefix;
      this._type = value.type;
      this._enumOptions.internalValue = value.enumOptions;
    }
  }

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // postfix - computed: false, optional: true, required: false
  private _postfix?: string; 
  public get postfix() {
    return this.getStringAttribute('postfix');
  }
  public set postfix(value: string) {
    this._postfix = value;
  }
  public resetPostfix() {
    this._postfix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postfixInput() {
    return this._postfix;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // enum_options - computed: false, optional: true, required: false
  private _enumOptions = new DataAkamaiImagingPolicyImagePolicyVariablesEnumOptionsList(this, "enum_options", false);
  public get enumOptions() {
    return this._enumOptions;
  }
  public putEnumOptions(value: DataAkamaiImagingPolicyImagePolicyVariablesEnumOptions[] | cdktf.IResolvable) {
    this._enumOptions.internalValue = value;
  }
  public resetEnumOptions() {
    this._enumOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumOptionsInput() {
    return this._enumOptions.internalValue;
  }
}

export class DataAkamaiImagingPolicyImagePolicyVariablesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyImagePolicyVariables[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAkamaiImagingPolicyImagePolicyVariablesOutputReference {
    return new DataAkamaiImagingPolicyImagePolicyVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyImagePolicy {
  /**
  * Hosts that are allowed for image/video URLs within transformations or variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#hosts DataAkamaiImagingPolicyImage#hosts}
  */
  readonly hosts?: string[];
  /**
  * The amount of time in seconds that the policy takes to rollout. During the rollout an increasing proportion of images/videos will begin to use the new policy instead of the cached images/videos from the previous version. This value has no effect on the staging network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#rollout_duration DataAkamaiImagingPolicyImage#rollout_duration}
  */
  readonly rolloutDuration?: string;
  /**
  * The amount of time in seconds that the policy will serve stale images. During the serve stale period realtime images will attempt to use the offline image from the previous policy version first if possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#serve_stale_duration DataAkamaiImagingPolicyImage#serve_stale_duration}
  */
  readonly serveStaleDuration?: string;
  /**
  * breakpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#breakpoints DataAkamaiImagingPolicyImage#breakpoints}
  */
  readonly breakpoints?: DataAkamaiImagingPolicyImagePolicyBreakpoints;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#output DataAkamaiImagingPolicyImage#output}
  */
  readonly output?: DataAkamaiImagingPolicyImagePolicyOutput;
  /**
  * post_breakpoint_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#post_breakpoint_transformations DataAkamaiImagingPolicyImage#post_breakpoint_transformations}
  */
  readonly postBreakpointTransformations?: DataAkamaiImagingPolicyImagePolicyPostBreakpointTransformations[] | cdktf.IResolvable;
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#transformations DataAkamaiImagingPolicyImage#transformations}
  */
  readonly transformations?: DataAkamaiImagingPolicyImagePolicyTransformations[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_image#variables DataAkamaiImagingPolicyImage#variables}
  */
  readonly variables?: DataAkamaiImagingPolicyImagePolicyVariables[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyImagePolicyToTerraform(struct?: DataAkamaiImagingPolicyImagePolicyOutputReference | DataAkamaiImagingPolicyImagePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    rollout_duration: cdktf.stringToTerraform(struct!.rolloutDuration),
    serve_stale_duration: cdktf.stringToTerraform(struct!.serveStaleDuration),
    breakpoints: dataAkamaiImagingPolicyImagePolicyBreakpointsToTerraform(struct!.breakpoints),
    output: dataAkamaiImagingPolicyImagePolicyOutputToTerraform(struct!.output),
    post_breakpoint_transformations: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyPostBreakpointTransformationsToTerraform, true)(struct!.postBreakpointTransformations),
    transformations: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyTransformationsToTerraform, true)(struct!.transformations),
    variables: cdktf.listMapper(dataAkamaiImagingPolicyImagePolicyVariablesToTerraform, true)(struct!.variables),
  }
}


export function dataAkamaiImagingPolicyImagePolicyToHclTerraform(struct?: DataAkamaiImagingPolicyImagePolicyOutputReference | DataAkamaiImagingPolicyImagePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rollout_duration: {
      value: cdktf.stringToHclTerraform(struct!.rolloutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serve_stale_duration: {
      value: cdktf.stringToHclTerraform(struct!.serveStaleDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    breakpoints: {
      value: dataAkamaiImagingPolicyImagePolicyBreakpointsToHclTerraform(struct!.breakpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyBreakpointsList",
    },
    output: {
      value: dataAkamaiImagingPolicyImagePolicyOutputToHclTerraform(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyOutputList",
    },
    post_breakpoint_transformations: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyPostBreakpointTransformationsToHclTerraform, true)(struct!.postBreakpointTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyPostBreakpointTransformationsList",
    },
    transformations: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyTransformationsToHclTerraform, true)(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyTransformationsList",
    },
    variables: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyImagePolicyVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyImagePolicyVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyImagePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiImagingPolicyImagePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._rolloutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutDuration = this._rolloutDuration;
    }
    if (this._serveStaleDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveStaleDuration = this._serveStaleDuration;
    }
    if (this._breakpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakpoints = this._breakpoints?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    if (this._postBreakpointTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postBreakpointTransformations = this._postBreakpointTransformations?.internalValue;
    }
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyImagePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._rolloutDuration = undefined;
      this._serveStaleDuration = undefined;
      this._breakpoints.internalValue = undefined;
      this._output.internalValue = undefined;
      this._postBreakpointTransformations.internalValue = undefined;
      this._transformations.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._rolloutDuration = value.rolloutDuration;
      this._serveStaleDuration = value.serveStaleDuration;
      this._breakpoints.internalValue = value.breakpoints;
      this._output.internalValue = value.output;
      this._postBreakpointTransformations.internalValue = value.postBreakpointTransformations;
      this._transformations.internalValue = value.transformations;
      this._variables.internalValue = value.variables;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // rollout_duration - computed: false, optional: true, required: false
  private _rolloutDuration?: string; 
  public get rolloutDuration() {
    return this.getStringAttribute('rollout_duration');
  }
  public set rolloutDuration(value: string) {
    this._rolloutDuration = value;
  }
  public resetRolloutDuration() {
    this._rolloutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutDurationInput() {
    return this._rolloutDuration;
  }

  // serve_stale_duration - computed: false, optional: true, required: false
  private _serveStaleDuration?: string; 
  public get serveStaleDuration() {
    return this.getStringAttribute('serve_stale_duration');
  }
  public set serveStaleDuration(value: string) {
    this._serveStaleDuration = value;
  }
  public resetServeStaleDuration() {
    this._serveStaleDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveStaleDurationInput() {
    return this._serveStaleDuration;
  }

  // breakpoints - computed: false, optional: true, required: false
  private _breakpoints = new DataAkamaiImagingPolicyImagePolicyBreakpointsOutputReference(this, "breakpoints");
  public get breakpoints() {
    return this._breakpoints;
  }
  public putBreakpoints(value: DataAkamaiImagingPolicyImagePolicyBreakpoints) {
    this._breakpoints.internalValue = value;
  }
  public resetBreakpoints() {
    this._breakpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakpointsInput() {
    return this._breakpoints.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new DataAkamaiImagingPolicyImagePolicyOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: DataAkamaiImagingPolicyImagePolicyOutput) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // post_breakpoint_transformations - computed: false, optional: true, required: false
  private _postBreakpointTransformations = new DataAkamaiImagingPolicyImagePolicyPostBreakpointTransformationsList(this, "post_breakpoint_transformations", false);
  public get postBreakpointTransformations() {
    return this._postBreakpointTransformations;
  }
  public putPostBreakpointTransformations(value: DataAkamaiImagingPolicyImagePolicyPostBreakpointTransformations[] | cdktf.IResolvable) {
    this._postBreakpointTransformations.internalValue = value;
  }
  public resetPostBreakpointTransformations() {
    this._postBreakpointTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBreakpointTransformationsInput() {
    return this._postBreakpointTransformations.internalValue;
  }

  // transformations - computed: false, optional: true, required: false
  private _transformations = new DataAkamaiImagingPolicyImagePolicyTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: DataAkamaiImagingPolicyImagePolicyTransformations[] | cdktf.IResolvable) {
    this._transformations.internalValue = value;
  }
  public resetTransformations() {
    this._transformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataAkamaiImagingPolicyImagePolicyVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataAkamaiImagingPolicyImagePolicyVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
