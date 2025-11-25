// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwVpcInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud networking id, suitable for cloud networking mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#ccn_id CfwVpcInstance#ccn_id}
  */
  readonly ccnId?: string;
  /**
  * auto Automatically select the firewall network segment; 10.10.10.0/24 The firewall network segment entered by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#fw_vpc_cidr CfwVpcInstance#fw_vpc_cidr}
  */
  readonly fwVpcCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#id CfwVpcInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mode 0: private network mode; 1: CCN cloud networking mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#mode CfwVpcInstance#mode}
  */
  readonly mode: number;
  /**
  * VPC firewall (group) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#name CfwVpcInstance#name}
  */
  readonly name: string;
  /**
  * Switch mode of firewall instance. 1: Single point intercommunication; 2: Multi-point communication; 4: Custom Routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#switch_mode CfwVpcInstance#switch_mode}
  */
  readonly switchMode: number;
  /**
  * vpc_fw_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#vpc_fw_instances CfwVpcInstance#vpc_fw_instances}
  */
  readonly vpcFwInstances: CfwVpcInstanceVpcFwInstances[] | cdktf.IResolvable;
}
export interface CfwVpcInstanceVpcFwInstancesFwDeploy {
  /**
  * Off-site disaster recovery 1: use off-site disaster recovery; 0: do not use off-site disaster recovery; if it is empty, off-site disaster recovery will not be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#cross_a_zone CfwVpcInstance#cross_a_zone}
  */
  readonly crossAZone?: number;
  /**
  * Firewall Deployment Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#deploy_region CfwVpcInstance#deploy_region}
  */
  readonly deployRegion: string;
  /**
  * Bandwidth, unit: Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#width CfwVpcInstance#width}
  */
  readonly width: number;
  /**
  * Zone list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#zone_set CfwVpcInstance#zone_set}
  */
  readonly zoneSet: string[];
}

export function cfwVpcInstanceVpcFwInstancesFwDeployToTerraform(struct?: CfwVpcInstanceVpcFwInstancesFwDeployOutputReference | CfwVpcInstanceVpcFwInstancesFwDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_a_zone: cdktf.numberToTerraform(struct!.crossAZone),
    deploy_region: cdktf.stringToTerraform(struct!.deployRegion),
    width: cdktf.numberToTerraform(struct!.width),
    zone_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zoneSet),
  }
}


export function cfwVpcInstanceVpcFwInstancesFwDeployToHclTerraform(struct?: CfwVpcInstanceVpcFwInstancesFwDeployOutputReference | CfwVpcInstanceVpcFwInstancesFwDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_a_zone: {
      value: cdktf.numberToHclTerraform(struct!.crossAZone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deploy_region: {
      value: cdktf.stringToHclTerraform(struct!.deployRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zoneSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwVpcInstanceVpcFwInstancesFwDeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CfwVpcInstanceVpcFwInstancesFwDeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAZone = this._crossAZone;
    }
    if (this._deployRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployRegion = this._deployRegion;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._zoneSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSet = this._zoneSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwVpcInstanceVpcFwInstancesFwDeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossAZone = undefined;
      this._deployRegion = undefined;
      this._width = undefined;
      this._zoneSet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossAZone = value.crossAZone;
      this._deployRegion = value.deployRegion;
      this._width = value.width;
      this._zoneSet = value.zoneSet;
    }
  }

  // cross_a_zone - computed: false, optional: true, required: false
  private _crossAZone?: number; 
  public get crossAZone() {
    return this.getNumberAttribute('cross_a_zone');
  }
  public set crossAZone(value: number) {
    this._crossAZone = value;
  }
  public resetCrossAZone() {
    this._crossAZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAZoneInput() {
    return this._crossAZone;
  }

  // deploy_region - computed: false, optional: false, required: true
  private _deployRegion?: string; 
  public get deployRegion() {
    return this.getStringAttribute('deploy_region');
  }
  public set deployRegion(value: string) {
    this._deployRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployRegionInput() {
    return this._deployRegion;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // zone_set - computed: false, optional: false, required: true
  private _zoneSet?: string[]; 
  public get zoneSet() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_set'));
  }
  public set zoneSet(value: string[]) {
    this._zoneSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSetInput() {
    return this._zoneSet;
  }
}
export interface CfwVpcInstanceVpcFwInstances {
  /**
  * Firewall instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#name CfwVpcInstance#name}
  */
  readonly name: string;
  /**
  * List of VpcIds accessed in private network mode; only used in private network mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#vpc_ids CfwVpcInstance#vpc_ids}
  */
  readonly vpcIds?: string[];
  /**
  * fw_deploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#fw_deploy CfwVpcInstance#fw_deploy}
  */
  readonly fwDeploy: CfwVpcInstanceVpcFwInstancesFwDeploy;
}

export function cfwVpcInstanceVpcFwInstancesToTerraform(struct?: CfwVpcInstanceVpcFwInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcIds),
    fw_deploy: cfwVpcInstanceVpcFwInstancesFwDeployToTerraform(struct!.fwDeploy),
  }
}


export function cfwVpcInstanceVpcFwInstancesToHclTerraform(struct?: CfwVpcInstanceVpcFwInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fw_deploy: {
      value: cfwVpcInstanceVpcFwInstancesFwDeployToHclTerraform(struct!.fwDeploy),
      isBlock: true,
      type: "list",
      storageClassType: "CfwVpcInstanceVpcFwInstancesFwDeployList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwVpcInstanceVpcFwInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CfwVpcInstanceVpcFwInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vpcIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIds = this._vpcIds;
    }
    if (this._fwDeploy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwDeploy = this._fwDeploy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwVpcInstanceVpcFwInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vpcIds = undefined;
      this._fwDeploy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vpcIds = value.vpcIds;
      this._fwDeploy.internalValue = value.fwDeploy;
    }
  }

  // fw_ins_id - computed: true, optional: false, required: false
  public get fwInsId() {
    return this.getStringAttribute('fw_ins_id');
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

  // vpc_ids - computed: false, optional: true, required: false
  private _vpcIds?: string[]; 
  public get vpcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_ids'));
  }
  public set vpcIds(value: string[]) {
    this._vpcIds = value;
  }
  public resetVpcIds() {
    this._vpcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdsInput() {
    return this._vpcIds;
  }

  // fw_deploy - computed: false, optional: false, required: true
  private _fwDeploy = new CfwVpcInstanceVpcFwInstancesFwDeployOutputReference(this, "fw_deploy");
  public get fwDeploy() {
    return this._fwDeploy;
  }
  public putFwDeploy(value: CfwVpcInstanceVpcFwInstancesFwDeploy) {
    this._fwDeploy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDeployInput() {
    return this._fwDeploy.internalValue;
  }
}

export class CfwVpcInstanceVpcFwInstancesList extends cdktf.ComplexList {
  public internalValue? : CfwVpcInstanceVpcFwInstances[] | cdktf.IResolvable

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
  public get(index: number): CfwVpcInstanceVpcFwInstancesOutputReference {
    return new CfwVpcInstanceVpcFwInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance tencentcloud_cfw_vpc_instance}
*/
export class CfwVpcInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfw_vpc_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwVpcInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwVpcInstance to import
  * @param importFromId The id of the existing CfwVpcInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwVpcInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfw_vpc_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cfw_vpc_instance tencentcloud_cfw_vpc_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwVpcInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CfwVpcInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfw_vpc_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccnId = config.ccnId;
    this._fwVpcCidr = config.fwVpcCidr;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._switchMode = config.switchMode;
    this._vpcFwInstances.internalValue = config.vpcFwInstances;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ccn_id - computed: false, optional: true, required: false
  private _ccnId?: string; 
  public get ccnId() {
    return this.getStringAttribute('ccn_id');
  }
  public set ccnId(value: string) {
    this._ccnId = value;
  }
  public resetCcnId() {
    this._ccnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnIdInput() {
    return this._ccnId;
  }

  // fw_vpc_cidr - computed: false, optional: true, required: false
  private _fwVpcCidr?: string; 
  public get fwVpcCidr() {
    return this.getStringAttribute('fw_vpc_cidr');
  }
  public set fwVpcCidr(value: string) {
    this._fwVpcCidr = value;
  }
  public resetFwVpcCidr() {
    this._fwVpcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwVpcCidrInput() {
    return this._fwVpcCidr;
  }

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

  // mode - computed: false, optional: false, required: true
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // switch_mode - computed: false, optional: false, required: true
  private _switchMode?: number; 
  public get switchMode() {
    return this.getNumberAttribute('switch_mode');
  }
  public set switchMode(value: number) {
    this._switchMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchModeInput() {
    return this._switchMode;
  }

  // vpc_fw_instances - computed: false, optional: false, required: true
  private _vpcFwInstances = new CfwVpcInstanceVpcFwInstancesList(this, "vpc_fw_instances", false);
  public get vpcFwInstances() {
    return this._vpcFwInstances;
  }
  public putVpcFwInstances(value: CfwVpcInstanceVpcFwInstances[] | cdktf.IResolvable) {
    this._vpcFwInstances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcFwInstancesInput() {
    return this._vpcFwInstances.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ccn_id: cdktf.stringToTerraform(this._ccnId),
      fw_vpc_cidr: cdktf.stringToTerraform(this._fwVpcCidr),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.numberToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      switch_mode: cdktf.numberToTerraform(this._switchMode),
      vpc_fw_instances: cdktf.listMapper(cfwVpcInstanceVpcFwInstancesToTerraform, true)(this._vpcFwInstances.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ccn_id: {
        value: cdktf.stringToHclTerraform(this._ccnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fw_vpc_cidr: {
        value: cdktf.stringToHclTerraform(this._fwVpcCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.numberToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_mode: {
        value: cdktf.numberToHclTerraform(this._switchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_fw_instances: {
        value: cdktf.listMapperHcl(cfwVpcInstanceVpcFwInstancesToHclTerraform, true)(this._vpcFwInstances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CfwVpcInstanceVpcFwInstancesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
