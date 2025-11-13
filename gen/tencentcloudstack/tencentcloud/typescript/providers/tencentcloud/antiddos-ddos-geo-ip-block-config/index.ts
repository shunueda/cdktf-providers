// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/antiddos_ddos_geo_ip_block_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosDdosGeoIpBlockConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/antiddos_ddos_geo_ip_block_config#id AntiddosDdosGeoIpBlockConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * InstanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/antiddos_ddos_geo_ip_block_config#instance_id AntiddosDdosGeoIpBlockConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * ddos_geo_ip_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/antiddos_ddos_geo_ip_block_config#ddos_geo_ip_block_config AntiddosDdosGeoIpBlockConfig#ddos_geo_ip_block_config}
  */
  readonly ddosGeoIpBlockConfig: AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfig;
}
export interface AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfig {
  /**
  * Blocking action, value [drop (intercept) trans (release)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/antiddos_ddos_geo_ip_block_config#action AntiddosDdosGeoIpBlockConfig#action}
  */
  readonly action: string;
  /**
  * When RegionType is customized, an AreaList must be filled in, with a maximum of 128 entries;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/antiddos_ddos_geo_ip_block_config#area_list AntiddosDdosGeoIpBlockConfig#area_list}
  */
  readonly areaList?: number[];
  /**
  * Region type, value [oversea (overseas) China (domestic) customized (custom region)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/antiddos_ddos_geo_ip_block_config#region_type AntiddosDdosGeoIpBlockConfig#region_type}
  */
  readonly regionType: string;
}

export function antiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfigToTerraform(struct?: AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfigOutputReference | AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    area_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.areaList),
    region_type: cdktf.stringToTerraform(struct!.regionType),
  }
}


export function antiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfigToHclTerraform(struct?: AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfigOutputReference | AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.areaList),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    region_type: {
      value: cdktf.stringToHclTerraform(struct!.regionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._areaList !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaList = this._areaList;
    }
    if (this._regionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionType = this._regionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._areaList = undefined;
      this._regionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._areaList = value.areaList;
      this._regionType = value.regionType;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // area_list - computed: false, optional: true, required: false
  private _areaList?: number[]; 
  public get areaList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('area_list')));
  }
  public set areaList(value: number[]) {
    this._areaList = value;
  }
  public resetAreaList() {
    this._areaList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList;
  }

  // region_type - computed: false, optional: false, required: true
  private _regionType?: string; 
  public get regionType() {
    return this.getStringAttribute('region_type');
  }
  public set regionType(value: string) {
    this._regionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionTypeInput() {
    return this._regionType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/antiddos_ddos_geo_ip_block_config tencentcloud_antiddos_ddos_geo_ip_block_config}
*/
export class AntiddosDdosGeoIpBlockConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_ddos_geo_ip_block_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosDdosGeoIpBlockConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosDdosGeoIpBlockConfig to import
  * @param importFromId The id of the existing AntiddosDdosGeoIpBlockConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/antiddos_ddos_geo_ip_block_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosDdosGeoIpBlockConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_ddos_geo_ip_block_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/antiddos_ddos_geo_ip_block_config tencentcloud_antiddos_ddos_geo_ip_block_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosDdosGeoIpBlockConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AntiddosDdosGeoIpBlockConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_ddos_geo_ip_block_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._instanceId = config.instanceId;
    this._ddosGeoIpBlockConfig.internalValue = config.ddosGeoIpBlockConfig;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ddos_geo_ip_block_config - computed: false, optional: false, required: true
  private _ddosGeoIpBlockConfig = new AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfigOutputReference(this, "ddos_geo_ip_block_config");
  public get ddosGeoIpBlockConfig() {
    return this._ddosGeoIpBlockConfig;
  }
  public putDdosGeoIpBlockConfig(value: AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfig) {
    this._ddosGeoIpBlockConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosGeoIpBlockConfigInput() {
    return this._ddosGeoIpBlockConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ddos_geo_ip_block_config: antiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfigToTerraform(this._ddosGeoIpBlockConfig.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddos_geo_ip_block_config: {
        value: antiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfigToHclTerraform(this._ddosGeoIpBlockConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosDdosGeoIpBlockConfigDdosGeoIpBlockConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
