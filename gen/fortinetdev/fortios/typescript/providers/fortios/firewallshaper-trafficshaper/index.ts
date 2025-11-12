// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallshaperTrafficshaperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#bandwidth_unit FirewallshaperTrafficshaper#bandwidth_unit}
  */
  readonly bandwidthUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#cos FirewallshaperTrafficshaper#cos}
  */
  readonly cos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#cos_marking FirewallshaperTrafficshaper#cos_marking}
  */
  readonly cosMarking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#cos_marking_method FirewallshaperTrafficshaper#cos_marking_method}
  */
  readonly cosMarkingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#diffserv FirewallshaperTrafficshaper#diffserv}
  */
  readonly diffserv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#diffservcode FirewallshaperTrafficshaper#diffservcode}
  */
  readonly diffservcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#dscp_marking_method FirewallshaperTrafficshaper#dscp_marking_method}
  */
  readonly dscpMarkingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#exceed_bandwidth FirewallshaperTrafficshaper#exceed_bandwidth}
  */
  readonly exceedBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#exceed_class_id FirewallshaperTrafficshaper#exceed_class_id}
  */
  readonly exceedClassId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#exceed_cos FirewallshaperTrafficshaper#exceed_cos}
  */
  readonly exceedCos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#exceed_dscp FirewallshaperTrafficshaper#exceed_dscp}
  */
  readonly exceedDscp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#guaranteed_bandwidth FirewallshaperTrafficshaper#guaranteed_bandwidth}
  */
  readonly guaranteedBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#id FirewallshaperTrafficshaper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#maximum_bandwidth FirewallshaperTrafficshaper#maximum_bandwidth}
  */
  readonly maximumBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#maximum_cos FirewallshaperTrafficshaper#maximum_cos}
  */
  readonly maximumCos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#maximum_dscp FirewallshaperTrafficshaper#maximum_dscp}
  */
  readonly maximumDscp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#name FirewallshaperTrafficshaper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#overhead FirewallshaperTrafficshaper#overhead}
  */
  readonly overhead?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#per_policy FirewallshaperTrafficshaper#per_policy}
  */
  readonly perPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#priority FirewallshaperTrafficshaper#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#vdomparam FirewallshaperTrafficshaper#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper fortios_firewallshaper_trafficshaper}
*/
export class FirewallshaperTrafficshaper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewallshaper_trafficshaper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallshaperTrafficshaper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallshaperTrafficshaper to import
  * @param importFromId The id of the existing FirewallshaperTrafficshaper that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallshaperTrafficshaper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewallshaper_trafficshaper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallshaper_trafficshaper fortios_firewallshaper_trafficshaper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallshaperTrafficshaperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallshaperTrafficshaperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewallshaper_trafficshaper',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthUnit = config.bandwidthUnit;
    this._cos = config.cos;
    this._cosMarking = config.cosMarking;
    this._cosMarkingMethod = config.cosMarkingMethod;
    this._diffserv = config.diffserv;
    this._diffservcode = config.diffservcode;
    this._dscpMarkingMethod = config.dscpMarkingMethod;
    this._exceedBandwidth = config.exceedBandwidth;
    this._exceedClassId = config.exceedClassId;
    this._exceedCos = config.exceedCos;
    this._exceedDscp = config.exceedDscp;
    this._guaranteedBandwidth = config.guaranteedBandwidth;
    this._id = config.id;
    this._maximumBandwidth = config.maximumBandwidth;
    this._maximumCos = config.maximumCos;
    this._maximumDscp = config.maximumDscp;
    this._name = config.name;
    this._overhead = config.overhead;
    this._perPolicy = config.perPolicy;
    this._priority = config.priority;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_unit - computed: true, optional: true, required: false
  private _bandwidthUnit?: string; 
  public get bandwidthUnit() {
    return this.getStringAttribute('bandwidth_unit');
  }
  public set bandwidthUnit(value: string) {
    this._bandwidthUnit = value;
  }
  public resetBandwidthUnit() {
    this._bandwidthUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthUnitInput() {
    return this._bandwidthUnit;
  }

  // cos - computed: true, optional: true, required: false
  private _cos?: string; 
  public get cos() {
    return this.getStringAttribute('cos');
  }
  public set cos(value: string) {
    this._cos = value;
  }
  public resetCos() {
    this._cos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInput() {
    return this._cos;
  }

  // cos_marking - computed: true, optional: true, required: false
  private _cosMarking?: string; 
  public get cosMarking() {
    return this.getStringAttribute('cos_marking');
  }
  public set cosMarking(value: string) {
    this._cosMarking = value;
  }
  public resetCosMarking() {
    this._cosMarking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosMarkingInput() {
    return this._cosMarking;
  }

  // cos_marking_method - computed: true, optional: true, required: false
  private _cosMarkingMethod?: string; 
  public get cosMarkingMethod() {
    return this.getStringAttribute('cos_marking_method');
  }
  public set cosMarkingMethod(value: string) {
    this._cosMarkingMethod = value;
  }
  public resetCosMarkingMethod() {
    this._cosMarkingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosMarkingMethodInput() {
    return this._cosMarkingMethod;
  }

  // diffserv - computed: true, optional: true, required: false
  private _diffserv?: string; 
  public get diffserv() {
    return this.getStringAttribute('diffserv');
  }
  public set diffserv(value: string) {
    this._diffserv = value;
  }
  public resetDiffserv() {
    this._diffserv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservInput() {
    return this._diffserv;
  }

  // diffservcode - computed: false, optional: true, required: false
  private _diffservcode?: string; 
  public get diffservcode() {
    return this.getStringAttribute('diffservcode');
  }
  public set diffservcode(value: string) {
    this._diffservcode = value;
  }
  public resetDiffservcode() {
    this._diffservcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeInput() {
    return this._diffservcode;
  }

  // dscp_marking_method - computed: true, optional: true, required: false
  private _dscpMarkingMethod?: string; 
  public get dscpMarkingMethod() {
    return this.getStringAttribute('dscp_marking_method');
  }
  public set dscpMarkingMethod(value: string) {
    this._dscpMarkingMethod = value;
  }
  public resetDscpMarkingMethod() {
    this._dscpMarkingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpMarkingMethodInput() {
    return this._dscpMarkingMethod;
  }

  // exceed_bandwidth - computed: false, optional: true, required: false
  private _exceedBandwidth?: number; 
  public get exceedBandwidth() {
    return this.getNumberAttribute('exceed_bandwidth');
  }
  public set exceedBandwidth(value: number) {
    this._exceedBandwidth = value;
  }
  public resetExceedBandwidth() {
    this._exceedBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedBandwidthInput() {
    return this._exceedBandwidth;
  }

  // exceed_class_id - computed: false, optional: true, required: false
  private _exceedClassId?: number; 
  public get exceedClassId() {
    return this.getNumberAttribute('exceed_class_id');
  }
  public set exceedClassId(value: number) {
    this._exceedClassId = value;
  }
  public resetExceedClassId() {
    this._exceedClassId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedClassIdInput() {
    return this._exceedClassId;
  }

  // exceed_cos - computed: true, optional: true, required: false
  private _exceedCos?: string; 
  public get exceedCos() {
    return this.getStringAttribute('exceed_cos');
  }
  public set exceedCos(value: string) {
    this._exceedCos = value;
  }
  public resetExceedCos() {
    this._exceedCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedCosInput() {
    return this._exceedCos;
  }

  // exceed_dscp - computed: true, optional: true, required: false
  private _exceedDscp?: string; 
  public get exceedDscp() {
    return this.getStringAttribute('exceed_dscp');
  }
  public set exceedDscp(value: string) {
    this._exceedDscp = value;
  }
  public resetExceedDscp() {
    this._exceedDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDscpInput() {
    return this._exceedDscp;
  }

  // guaranteed_bandwidth - computed: false, optional: true, required: false
  private _guaranteedBandwidth?: number; 
  public get guaranteedBandwidth() {
    return this.getNumberAttribute('guaranteed_bandwidth');
  }
  public set guaranteedBandwidth(value: number) {
    this._guaranteedBandwidth = value;
  }
  public resetGuaranteedBandwidth() {
    this._guaranteedBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedBandwidthInput() {
    return this._guaranteedBandwidth;
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

  // maximum_bandwidth - computed: false, optional: true, required: false
  private _maximumBandwidth?: number; 
  public get maximumBandwidth() {
    return this.getNumberAttribute('maximum_bandwidth');
  }
  public set maximumBandwidth(value: number) {
    this._maximumBandwidth = value;
  }
  public resetMaximumBandwidth() {
    this._maximumBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBandwidthInput() {
    return this._maximumBandwidth;
  }

  // maximum_cos - computed: true, optional: true, required: false
  private _maximumCos?: string; 
  public get maximumCos() {
    return this.getStringAttribute('maximum_cos');
  }
  public set maximumCos(value: string) {
    this._maximumCos = value;
  }
  public resetMaximumCos() {
    this._maximumCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCosInput() {
    return this._maximumCos;
  }

  // maximum_dscp - computed: true, optional: true, required: false
  private _maximumDscp?: string; 
  public get maximumDscp() {
    return this.getStringAttribute('maximum_dscp');
  }
  public set maximumDscp(value: string) {
    this._maximumDscp = value;
  }
  public resetMaximumDscp() {
    this._maximumDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumDscpInput() {
    return this._maximumDscp;
  }

  // name - computed: false, optional: true, required: false
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

  // overhead - computed: false, optional: true, required: false
  private _overhead?: number; 
  public get overhead() {
    return this.getNumberAttribute('overhead');
  }
  public set overhead(value: number) {
    this._overhead = value;
  }
  public resetOverhead() {
    this._overhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overheadInput() {
    return this._overhead;
  }

  // per_policy - computed: true, optional: true, required: false
  private _perPolicy?: string; 
  public get perPolicy() {
    return this.getStringAttribute('per_policy');
  }
  public set perPolicy(value: string) {
    this._perPolicy = value;
  }
  public resetPerPolicy() {
    this._perPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPolicyInput() {
    return this._perPolicy;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_unit: cdktf.stringToTerraform(this._bandwidthUnit),
      cos: cdktf.stringToTerraform(this._cos),
      cos_marking: cdktf.stringToTerraform(this._cosMarking),
      cos_marking_method: cdktf.stringToTerraform(this._cosMarkingMethod),
      diffserv: cdktf.stringToTerraform(this._diffserv),
      diffservcode: cdktf.stringToTerraform(this._diffservcode),
      dscp_marking_method: cdktf.stringToTerraform(this._dscpMarkingMethod),
      exceed_bandwidth: cdktf.numberToTerraform(this._exceedBandwidth),
      exceed_class_id: cdktf.numberToTerraform(this._exceedClassId),
      exceed_cos: cdktf.stringToTerraform(this._exceedCos),
      exceed_dscp: cdktf.stringToTerraform(this._exceedDscp),
      guaranteed_bandwidth: cdktf.numberToTerraform(this._guaranteedBandwidth),
      id: cdktf.stringToTerraform(this._id),
      maximum_bandwidth: cdktf.numberToTerraform(this._maximumBandwidth),
      maximum_cos: cdktf.stringToTerraform(this._maximumCos),
      maximum_dscp: cdktf.stringToTerraform(this._maximumDscp),
      name: cdktf.stringToTerraform(this._name),
      overhead: cdktf.numberToTerraform(this._overhead),
      per_policy: cdktf.stringToTerraform(this._perPolicy),
      priority: cdktf.stringToTerraform(this._priority),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_unit: {
        value: cdktf.stringToHclTerraform(this._bandwidthUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos: {
        value: cdktf.stringToHclTerraform(this._cos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_marking: {
        value: cdktf.stringToHclTerraform(this._cosMarking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_marking_method: {
        value: cdktf.stringToHclTerraform(this._cosMarkingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffserv: {
        value: cdktf.stringToHclTerraform(this._diffserv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffservcode: {
        value: cdktf.stringToHclTerraform(this._diffservcode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_marking_method: {
        value: cdktf.stringToHclTerraform(this._dscpMarkingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exceed_bandwidth: {
        value: cdktf.numberToHclTerraform(this._exceedBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exceed_class_id: {
        value: cdktf.numberToHclTerraform(this._exceedClassId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exceed_cos: {
        value: cdktf.stringToHclTerraform(this._exceedCos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exceed_dscp: {
        value: cdktf.stringToHclTerraform(this._exceedDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guaranteed_bandwidth: {
        value: cdktf.numberToHclTerraform(this._guaranteedBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_bandwidth: {
        value: cdktf.numberToHclTerraform(this._maximumBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_cos: {
        value: cdktf.stringToHclTerraform(this._maximumCos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_dscp: {
        value: cdktf.stringToHclTerraform(this._maximumDscp),
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
      overhead: {
        value: cdktf.numberToHclTerraform(this._overhead),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_policy: {
        value: cdktf.stringToHclTerraform(this._perPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
