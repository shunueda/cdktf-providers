// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrolleraclIngressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#description SwitchcontrolleraclIngress#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#fosid SwitchcontrolleraclIngress#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#get_all_tables SwitchcontrolleraclIngress#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#id SwitchcontrolleraclIngress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#vdomparam SwitchcontrolleraclIngress#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#action SwitchcontrolleraclIngress#action}
  */
  readonly action?: SwitchcontrolleraclIngressAction;
  /**
  * classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#classifier SwitchcontrolleraclIngress#classifier}
  */
  readonly classifier?: SwitchcontrolleraclIngressClassifier;
}
export interface SwitchcontrolleraclIngressAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#count SwitchcontrolleraclIngress#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#drop SwitchcontrolleraclIngress#drop}
  */
  readonly drop?: string;
}

export function switchcontrolleraclIngressActionToTerraform(struct?: SwitchcontrolleraclIngressActionOutputReference | SwitchcontrolleraclIngressAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.stringToTerraform(struct!.count),
    drop: cdktf.stringToTerraform(struct!.drop),
  }
}


export function switchcontrolleraclIngressActionToHclTerraform(struct?: SwitchcontrolleraclIngressActionOutputReference | SwitchcontrolleraclIngressAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop: {
      value: cdktf.stringToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrolleraclIngressActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrolleraclIngressAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrolleraclIngressAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._drop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._drop = value.drop;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // drop - computed: true, optional: true, required: false
  private _drop?: string; 
  public get drop() {
    return this.getStringAttribute('drop');
  }
  public set drop(value: string) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface SwitchcontrolleraclIngressClassifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#dst_ip_prefix SwitchcontrolleraclIngress#dst_ip_prefix}
  */
  readonly dstIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#dst_mac SwitchcontrolleraclIngress#dst_mac}
  */
  readonly dstMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#src_ip_prefix SwitchcontrolleraclIngress#src_ip_prefix}
  */
  readonly srcIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#src_mac SwitchcontrolleraclIngress#src_mac}
  */
  readonly srcMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#vlan SwitchcontrolleraclIngress#vlan}
  */
  readonly vlan?: number;
}

export function switchcontrolleraclIngressClassifierToTerraform(struct?: SwitchcontrolleraclIngressClassifierOutputReference | SwitchcontrolleraclIngressClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ip_prefix: cdktf.stringToTerraform(struct!.dstIpPrefix),
    dst_mac: cdktf.stringToTerraform(struct!.dstMac),
    src_ip_prefix: cdktf.stringToTerraform(struct!.srcIpPrefix),
    src_mac: cdktf.stringToTerraform(struct!.srcMac),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function switchcontrolleraclIngressClassifierToHclTerraform(struct?: SwitchcontrolleraclIngressClassifierOutputReference | SwitchcontrolleraclIngressClassifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.dstIpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_mac: {
      value: cdktf.stringToHclTerraform(struct!.dstMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.srcIpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_mac: {
      value: cdktf.stringToHclTerraform(struct!.srcMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrolleraclIngressClassifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrolleraclIngressClassifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpPrefix = this._dstIpPrefix;
    }
    if (this._dstMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstMac = this._dstMac;
    }
    if (this._srcIpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpPrefix = this._srcIpPrefix;
    }
    if (this._srcMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMac = this._srcMac;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrolleraclIngressClassifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstIpPrefix = undefined;
      this._dstMac = undefined;
      this._srcIpPrefix = undefined;
      this._srcMac = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstIpPrefix = value.dstIpPrefix;
      this._dstMac = value.dstMac;
      this._srcIpPrefix = value.srcIpPrefix;
      this._srcMac = value.srcMac;
      this._vlan = value.vlan;
    }
  }

  // dst_ip_prefix - computed: true, optional: true, required: false
  private _dstIpPrefix?: string; 
  public get dstIpPrefix() {
    return this.getStringAttribute('dst_ip_prefix');
  }
  public set dstIpPrefix(value: string) {
    this._dstIpPrefix = value;
  }
  public resetDstIpPrefix() {
    this._dstIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpPrefixInput() {
    return this._dstIpPrefix;
  }

  // dst_mac - computed: true, optional: true, required: false
  private _dstMac?: string; 
  public get dstMac() {
    return this.getStringAttribute('dst_mac');
  }
  public set dstMac(value: string) {
    this._dstMac = value;
  }
  public resetDstMac() {
    this._dstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacInput() {
    return this._dstMac;
  }

  // src_ip_prefix - computed: true, optional: true, required: false
  private _srcIpPrefix?: string; 
  public get srcIpPrefix() {
    return this.getStringAttribute('src_ip_prefix');
  }
  public set srcIpPrefix(value: string) {
    this._srcIpPrefix = value;
  }
  public resetSrcIpPrefix() {
    this._srcIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpPrefixInput() {
    return this._srcIpPrefix;
  }

  // src_mac - computed: true, optional: true, required: false
  private _srcMac?: string; 
  public get srcMac() {
    return this.getStringAttribute('src_mac');
  }
  public set srcMac(value: string) {
    this._srcMac = value;
  }
  public resetSrcMac() {
    this._srcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacInput() {
    return this._srcMac;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress fortios_switchcontrolleracl_ingress}
*/
export class SwitchcontrolleraclIngress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontrolleracl_ingress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrolleraclIngress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrolleraclIngress to import
  * @param importFromId The id of the existing SwitchcontrolleraclIngress that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrolleraclIngress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontrolleracl_ingress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrolleracl_ingress fortios_switchcontrolleracl_ingress} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrolleraclIngressConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrolleraclIngressConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontrolleracl_ingress',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._vdomparam = config.vdomparam;
    this._action.internalValue = config.action;
    this._classifier.internalValue = config.classifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // action - computed: false, optional: true, required: false
  private _action = new SwitchcontrolleraclIngressActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SwitchcontrolleraclIngressAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // classifier - computed: false, optional: true, required: false
  private _classifier = new SwitchcontrolleraclIngressClassifierOutputReference(this, "classifier");
  public get classifier() {
    return this._classifier;
  }
  public putClassifier(value: SwitchcontrolleraclIngressClassifier) {
    this._classifier.internalValue = value;
  }
  public resetClassifier() {
    this._classifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      fosid: cdktf.numberToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      action: switchcontrolleraclIngressActionToTerraform(this._action.internalValue),
      classifier: switchcontrolleraclIngressClassifierToTerraform(this._classifier.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: switchcontrolleraclIngressActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrolleraclIngressActionList",
      },
      classifier: {
        value: switchcontrolleraclIngressClassifierToHclTerraform(this._classifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrolleraclIngressClassifierList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
