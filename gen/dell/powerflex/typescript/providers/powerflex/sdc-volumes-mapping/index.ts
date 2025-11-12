// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdcVolumesMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the SDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping#id SdcVolumesMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the SDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping#name SdcVolumesMapping#name}
  */
  readonly name?: string;
  /**
  * List of volumes mapped to SDC. At least one of `volume_id` and `volume_name` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping#volume_list SdcVolumesMapping#volume_list}
  */
  readonly volumeList?: SdcVolumesMappingVolumeListStruct[] | cdktf.IResolvable;
}
export interface SdcVolumesMappingVolumeListStruct {
  /**
  * The Access Mode of the SDC. Valid values are `ReadOnly`, `ReadWrite` and `NoAccess`. Default value is `ReadOnly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping#access_mode SdcVolumesMapping#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Bandwidth limit in MBPS. `0` represents unlimited bandwith. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping#limit_bw_in_mbps SdcVolumesMapping#limit_bw_in_mbps}
  */
  readonly limitBwInMbps?: number;
  /**
  * IOPS limit. Valid values are 0 or integers greater than 10. `0` represents unlimited IOPS. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping#limit_iops SdcVolumesMapping#limit_iops}
  */
  readonly limitIops?: number;
  /**
  * The ID of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping#volume_id SdcVolumesMapping#volume_id}
  */
  readonly volumeId?: string;
  /**
  * The name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping#volume_name SdcVolumesMapping#volume_name}
  */
  readonly volumeName?: string;
}

export function sdcVolumesMappingVolumeListStructToTerraform(struct?: SdcVolumesMappingVolumeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    limit_bw_in_mbps: cdktf.numberToTerraform(struct!.limitBwInMbps),
    limit_iops: cdktf.numberToTerraform(struct!.limitIops),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function sdcVolumesMappingVolumeListStructToHclTerraform(struct?: SdcVolumesMappingVolumeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_bw_in_mbps: {
      value: cdktf.numberToHclTerraform(struct!.limitBwInMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_iops: {
      value: cdktf.numberToHclTerraform(struct!.limitIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdcVolumesMappingVolumeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdcVolumesMappingVolumeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._limitBwInMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitBwInMbps = this._limitBwInMbps;
    }
    if (this._limitIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitIops = this._limitIops;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdcVolumesMappingVolumeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._limitBwInMbps = undefined;
      this._limitIops = undefined;
      this._volumeId = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._limitBwInMbps = value.limitBwInMbps;
      this._limitIops = value.limitIops;
      this._volumeId = value.volumeId;
      this._volumeName = value.volumeName;
    }
  }

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // limit_bw_in_mbps - computed: true, optional: true, required: false
  private _limitBwInMbps?: number; 
  public get limitBwInMbps() {
    return this.getNumberAttribute('limit_bw_in_mbps');
  }
  public set limitBwInMbps(value: number) {
    this._limitBwInMbps = value;
  }
  public resetLimitBwInMbps() {
    this._limitBwInMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBwInMbpsInput() {
    return this._limitBwInMbps;
  }

  // limit_iops - computed: true, optional: true, required: false
  private _limitIops?: number; 
  public get limitIops() {
    return this.getNumberAttribute('limit_iops');
  }
  public set limitIops(value: number) {
    this._limitIops = value;
  }
  public resetLimitIops() {
    this._limitIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitIopsInput() {
    return this._limitIops;
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // volume_name - computed: true, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class SdcVolumesMappingVolumeListStructList extends cdktf.ComplexList {
  public internalValue? : SdcVolumesMappingVolumeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SdcVolumesMappingVolumeListStructOutputReference {
    return new SdcVolumesMappingVolumeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping powerflex_sdc_volumes_mapping}
*/
export class SdcVolumesMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_sdc_volumes_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdcVolumesMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdcVolumesMapping to import
  * @param importFromId The id of the existing SdcVolumesMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdcVolumesMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_sdc_volumes_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_volumes_mapping powerflex_sdc_volumes_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdcVolumesMappingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SdcVolumesMappingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_sdc_volumes_mapping',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._volumeList.internalValue = config.volumeList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // volume_list - computed: true, optional: true, required: false
  private _volumeList = new SdcVolumesMappingVolumeListStructList(this, "volume_list", false);
  public get volumeList() {
    return this._volumeList;
  }
  public putVolumeList(value: SdcVolumesMappingVolumeListStruct[] | cdktf.IResolvable) {
    this._volumeList.internalValue = value;
  }
  public resetVolumeList() {
    this._volumeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeListInput() {
    return this._volumeList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      volume_list: cdktf.listMapper(sdcVolumesMappingVolumeListStructToTerraform, false)(this._volumeList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_list: {
        value: cdktf.listMapperHcl(sdcVolumesMappingVolumeListStructToHclTerraform, false)(this._volumeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdcVolumesMappingVolumeListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
