// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#arch WafInstance#arch}
  */
  readonly arch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#cpu_type WafInstance#cpu_type}
  */
  readonly cpuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#detector_nodenum WafInstance#detector_nodenum}
  */
  readonly detectorNodenum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#detector_specs WafInstance#detector_specs}
  */
  readonly detectorSpecs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#detector_version WafInstance#detector_version}
  */
  readonly detectorVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#id WafInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#instance_make_status WafInstance#instance_make_status}
  */
  readonly instanceMakeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#instance_status WafInstance#instance_status}
  */
  readonly instanceStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#name WafInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#vpc_id WafInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#vswitch_id WafInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#wafinstance_id WafInstance#wafinstance_id}
  */
  readonly wafinstanceId?: string;
  /**
  * vpc_vswitch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#vpc_vswitch WafInstance#vpc_vswitch}
  */
  readonly vpcVswitch: WafInstanceVpcVswitch[] | cdktf.IResolvable;
}
export interface WafInstanceVpcVswitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#available_zone WafInstance#available_zone}
  */
  readonly availableZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#cidr_block WafInstance#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#vpc WafInstance#vpc}
  */
  readonly vpc: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#vpc_name WafInstance#vpc_name}
  */
  readonly vpcName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#vswitch WafInstance#vswitch}
  */
  readonly vswitch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#vswitch_name WafInstance#vswitch_name}
  */
  readonly vswitchName: string;
}

export function wafInstanceVpcVswitchToTerraform(struct?: WafInstanceVpcVswitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    available_zone: cdktf.stringToTerraform(struct!.availableZone),
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    vpc_name: cdktf.stringToTerraform(struct!.vpcName),
    vswitch: cdktf.stringToTerraform(struct!.vswitch),
    vswitch_name: cdktf.stringToTerraform(struct!.vswitchName),
  }
}


export function wafInstanceVpcVswitchToHclTerraform(struct?: WafInstanceVpcVswitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    available_zone: {
      value: cdktf.stringToHclTerraform(struct!.availableZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_name: {
      value: cdktf.stringToHclTerraform(struct!.vpcName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch: {
      value: cdktf.stringToHclTerraform(struct!.vswitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_name: {
      value: cdktf.stringToHclTerraform(struct!.vswitchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafInstanceVpcVswitchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafInstanceVpcVswitch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availableZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableZone = this._availableZone;
    }
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._vpcName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcName = this._vpcName;
    }
    if (this._vswitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitch = this._vswitch;
    }
    if (this._vswitchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchName = this._vswitchName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafInstanceVpcVswitch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availableZone = undefined;
      this._cidrBlock = undefined;
      this._vpc = undefined;
      this._vpcName = undefined;
      this._vswitch = undefined;
      this._vswitchName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availableZone = value.availableZone;
      this._cidrBlock = value.cidrBlock;
      this._vpc = value.vpc;
      this._vpcName = value.vpcName;
      this._vswitch = value.vswitch;
      this._vswitchName = value.vswitchName;
    }
  }

  // available_zone - computed: false, optional: false, required: true
  private _availableZone?: string; 
  public get availableZone() {
    return this.getStringAttribute('available_zone');
  }
  public set availableZone(value: string) {
    this._availableZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZoneInput() {
    return this._availableZone;
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // vpc_name - computed: false, optional: false, required: true
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }

  // vswitch - computed: false, optional: false, required: true
  private _vswitch?: string; 
  public get vswitch() {
    return this.getStringAttribute('vswitch');
  }
  public set vswitch(value: string) {
    this._vswitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchInput() {
    return this._vswitch;
  }

  // vswitch_name - computed: false, optional: false, required: true
  private _vswitchName?: string; 
  public get vswitchName() {
    return this.getStringAttribute('vswitch_name');
  }
  public set vswitchName(value: string) {
    this._vswitchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchNameInput() {
    return this._vswitchName;
  }
}

export class WafInstanceVpcVswitchList extends cdktf.ComplexList {
  public internalValue? : WafInstanceVpcVswitch[] | cdktf.IResolvable

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
  public get(index: number): WafInstanceVpcVswitchOutputReference {
    return new WafInstanceVpcVswitchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance alibabacloudstack_waf_instance}
*/
export class WafInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_waf_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafInstance to import
  * @param importFromId The id of the existing WafInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_waf_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/waf_instance alibabacloudstack_waf_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: WafInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_waf_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arch = config.arch;
    this._cpuType = config.cpuType;
    this._detectorNodenum = config.detectorNodenum;
    this._detectorSpecs = config.detectorSpecs;
    this._detectorVersion = config.detectorVersion;
    this._id = config.id;
    this._instanceMakeStatus = config.instanceMakeStatus;
    this._instanceStatus = config.instanceStatus;
    this._name = config.name;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._wafinstanceId = config.wafinstanceId;
    this._vpcVswitch.internalValue = config.vpcVswitch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch - computed: true, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // cpu_type - computed: true, optional: true, required: false
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
  }

  // detector_nodenum - computed: false, optional: true, required: false
  private _detectorNodenum?: number; 
  public get detectorNodenum() {
    return this.getNumberAttribute('detector_nodenum');
  }
  public set detectorNodenum(value: number) {
    this._detectorNodenum = value;
  }
  public resetDetectorNodenum() {
    this._detectorNodenum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorNodenumInput() {
    return this._detectorNodenum;
  }

  // detector_specs - computed: false, optional: false, required: true
  private _detectorSpecs?: string; 
  public get detectorSpecs() {
    return this.getStringAttribute('detector_specs');
  }
  public set detectorSpecs(value: string) {
    this._detectorSpecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorSpecsInput() {
    return this._detectorSpecs;
  }

  // detector_version - computed: false, optional: false, required: true
  private _detectorVersion?: string; 
  public get detectorVersion() {
    return this.getStringAttribute('detector_version');
  }
  public set detectorVersion(value: string) {
    this._detectorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorVersionInput() {
    return this._detectorVersion;
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

  // instance_make_status - computed: true, optional: true, required: false
  private _instanceMakeStatus?: string; 
  public get instanceMakeStatus() {
    return this.getStringAttribute('instance_make_status');
  }
  public set instanceMakeStatus(value: string) {
    this._instanceMakeStatus = value;
  }
  public resetInstanceMakeStatus() {
    this._instanceMakeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMakeStatusInput() {
    return this._instanceMakeStatus;
  }

  // instance_status - computed: true, optional: true, required: false
  private _instanceStatus?: string; 
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }
  public set instanceStatus(value: string) {
    this._instanceStatus = value;
  }
  public resetInstanceStatus() {
    this._instanceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStatusInput() {
    return this._instanceStatus;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // wafinstance_id - computed: true, optional: true, required: false
  private _wafinstanceId?: string; 
  public get wafinstanceId() {
    return this.getStringAttribute('wafinstance_id');
  }
  public set wafinstanceId(value: string) {
    this._wafinstanceId = value;
  }
  public resetWafinstanceId() {
    this._wafinstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafinstanceIdInput() {
    return this._wafinstanceId;
  }

  // vpc_vswitch - computed: false, optional: false, required: true
  private _vpcVswitch = new WafInstanceVpcVswitchList(this, "vpc_vswitch", false);
  public get vpcVswitch() {
    return this._vpcVswitch;
  }
  public putVpcVswitch(value: WafInstanceVpcVswitch[] | cdktf.IResolvable) {
    this._vpcVswitch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcVswitchInput() {
    return this._vpcVswitch.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arch: cdktf.stringToTerraform(this._arch),
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      detector_nodenum: cdktf.numberToTerraform(this._detectorNodenum),
      detector_specs: cdktf.stringToTerraform(this._detectorSpecs),
      detector_version: cdktf.stringToTerraform(this._detectorVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_make_status: cdktf.stringToTerraform(this._instanceMakeStatus),
      instance_status: cdktf.stringToTerraform(this._instanceStatus),
      name: cdktf.stringToTerraform(this._name),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      wafinstance_id: cdktf.stringToTerraform(this._wafinstanceId),
      vpc_vswitch: cdktf.listMapper(wafInstanceVpcVswitchToTerraform, true)(this._vpcVswitch.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch: {
        value: cdktf.stringToHclTerraform(this._arch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_nodenum: {
        value: cdktf.numberToHclTerraform(this._detectorNodenum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detector_specs: {
        value: cdktf.stringToHclTerraform(this._detectorSpecs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_version: {
        value: cdktf.stringToHclTerraform(this._detectorVersion),
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
      instance_make_status: {
        value: cdktf.stringToHclTerraform(this._instanceMakeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_status: {
        value: cdktf.stringToHclTerraform(this._instanceStatus),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wafinstance_id: {
        value: cdktf.stringToHclTerraform(this._wafinstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_vswitch: {
        value: cdktf.listMapperHcl(wafInstanceVpcVswitchToHclTerraform, true)(this._vpcVswitch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafInstanceVpcVswitchList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
