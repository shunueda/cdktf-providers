// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallShapingprofileShapingentriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#adom ObjectFirewallShapingprofileShapingentries#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#burst_in_msec ObjectFirewallShapingprofileShapingentries#burst_in_msec}
  */
  readonly burstInMsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#cburst_in_msec ObjectFirewallShapingprofileShapingentries#cburst_in_msec}
  */
  readonly cburstInMsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#class_id ObjectFirewallShapingprofileShapingentries#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#fosid ObjectFirewallShapingprofileShapingentries#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#guaranteed_bandwidth_percentage ObjectFirewallShapingprofileShapingentries#guaranteed_bandwidth_percentage}
  */
  readonly guaranteedBandwidthPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#id ObjectFirewallShapingprofileShapingentries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#limit ObjectFirewallShapingprofileShapingentries#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#max ObjectFirewallShapingprofileShapingentries#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#maximum_bandwidth_percentage ObjectFirewallShapingprofileShapingentries#maximum_bandwidth_percentage}
  */
  readonly maximumBandwidthPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#min ObjectFirewallShapingprofileShapingentries#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#priority ObjectFirewallShapingprofileShapingentries#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#red_probability ObjectFirewallShapingprofileShapingentries#red_probability}
  */
  readonly redProbability?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#scopetype ObjectFirewallShapingprofileShapingentries#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#shaping_profile ObjectFirewallShapingprofileShapingentries#shaping_profile}
  */
  readonly shapingProfile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries fortimanager_object_firewall_shapingprofile_shapingentries}
*/
export class ObjectFirewallShapingprofileShapingentries extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_shapingprofile_shapingentries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallShapingprofileShapingentries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallShapingprofileShapingentries to import
  * @param importFromId The id of the existing ObjectFirewallShapingprofileShapingentries that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallShapingprofileShapingentries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_shapingprofile_shapingentries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile_shapingentries fortimanager_object_firewall_shapingprofile_shapingentries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallShapingprofileShapingentriesConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallShapingprofileShapingentriesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_shapingprofile_shapingentries',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._burstInMsec = config.burstInMsec;
    this._cburstInMsec = config.cburstInMsec;
    this._classId = config.classId;
    this._fosid = config.fosid;
    this._guaranteedBandwidthPercentage = config.guaranteedBandwidthPercentage;
    this._id = config.id;
    this._limit = config.limit;
    this._max = config.max;
    this._maximumBandwidthPercentage = config.maximumBandwidthPercentage;
    this._min = config.min;
    this._priority = config.priority;
    this._redProbability = config.redProbability;
    this._scopetype = config.scopetype;
    this._shapingProfile = config.shapingProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // burst_in_msec - computed: false, optional: true, required: false
  private _burstInMsec?: number; 
  public get burstInMsec() {
    return this.getNumberAttribute('burst_in_msec');
  }
  public set burstInMsec(value: number) {
    this._burstInMsec = value;
  }
  public resetBurstInMsec() {
    this._burstInMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInMsecInput() {
    return this._burstInMsec;
  }

  // cburst_in_msec - computed: false, optional: true, required: false
  private _cburstInMsec?: number; 
  public get cburstInMsec() {
    return this.getNumberAttribute('cburst_in_msec');
  }
  public set cburstInMsec(value: number) {
    this._cburstInMsec = value;
  }
  public resetCburstInMsec() {
    this._cburstInMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cburstInMsecInput() {
    return this._cburstInMsec;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // fosid - computed: false, optional: true, required: false
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

  // guaranteed_bandwidth_percentage - computed: false, optional: true, required: false
  private _guaranteedBandwidthPercentage?: number; 
  public get guaranteedBandwidthPercentage() {
    return this.getNumberAttribute('guaranteed_bandwidth_percentage');
  }
  public set guaranteedBandwidthPercentage(value: number) {
    this._guaranteedBandwidthPercentage = value;
  }
  public resetGuaranteedBandwidthPercentage() {
    this._guaranteedBandwidthPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedBandwidthPercentageInput() {
    return this._guaranteedBandwidthPercentage;
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

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // maximum_bandwidth_percentage - computed: true, optional: true, required: false
  private _maximumBandwidthPercentage?: number; 
  public get maximumBandwidthPercentage() {
    return this.getNumberAttribute('maximum_bandwidth_percentage');
  }
  public set maximumBandwidthPercentage(value: number) {
    this._maximumBandwidthPercentage = value;
  }
  public resetMaximumBandwidthPercentage() {
    this._maximumBandwidthPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBandwidthPercentageInput() {
    return this._maximumBandwidthPercentage;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // red_probability - computed: false, optional: true, required: false
  private _redProbability?: number; 
  public get redProbability() {
    return this.getNumberAttribute('red_probability');
  }
  public set redProbability(value: number) {
    this._redProbability = value;
  }
  public resetRedProbability() {
    this._redProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redProbabilityInput() {
    return this._redProbability;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // shaping_profile - computed: false, optional: false, required: true
  private _shapingProfile?: string; 
  public get shapingProfile() {
    return this.getStringAttribute('shaping_profile');
  }
  public set shapingProfile(value: string) {
    this._shapingProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapingProfileInput() {
    return this._shapingProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      burst_in_msec: cdktf.numberToTerraform(this._burstInMsec),
      cburst_in_msec: cdktf.numberToTerraform(this._cburstInMsec),
      class_id: cdktf.stringToTerraform(this._classId),
      fosid: cdktf.numberToTerraform(this._fosid),
      guaranteed_bandwidth_percentage: cdktf.numberToTerraform(this._guaranteedBandwidthPercentage),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      max: cdktf.numberToTerraform(this._max),
      maximum_bandwidth_percentage: cdktf.numberToTerraform(this._maximumBandwidthPercentage),
      min: cdktf.numberToTerraform(this._min),
      priority: cdktf.stringToTerraform(this._priority),
      red_probability: cdktf.numberToTerraform(this._redProbability),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      shaping_profile: cdktf.stringToTerraform(this._shapingProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst_in_msec: {
        value: cdktf.numberToHclTerraform(this._burstInMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cburst_in_msec: {
        value: cdktf.numberToHclTerraform(this._cburstInMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
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
      guaranteed_bandwidth_percentage: {
        value: cdktf.numberToHclTerraform(this._guaranteedBandwidthPercentage),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max: {
        value: cdktf.numberToHclTerraform(this._max),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_bandwidth_percentage: {
        value: cdktf.numberToHclTerraform(this._maximumBandwidthPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min: {
        value: cdktf.numberToHclTerraform(this._min),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      red_probability: {
        value: cdktf.numberToHclTerraform(this._redProbability),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shaping_profile: {
        value: cdktf.stringToHclTerraform(this._shapingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
