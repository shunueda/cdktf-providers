// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AtoEndpointMitigationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID that the site belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration#account_id AtoEndpointMitigationConfiguration#account_id}
  */
  readonly accountId?: number;
  /**
  * Endpoint ID associated with this request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration#endpoint_id AtoEndpointMitigationConfiguration#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration#id AtoEndpointMitigationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mitigation action configured for high risk requests - in UPPER CASE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration#mitigation_action_for_high_risk AtoEndpointMitigationConfiguration#mitigation_action_for_high_risk}
  */
  readonly mitigationActionForHighRisk: string;
  /**
  * Mitigation action configured for low risk requests - in UPPER CASE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration#mitigation_action_for_low_risk AtoEndpointMitigationConfiguration#mitigation_action_for_low_risk}
  */
  readonly mitigationActionForLowRisk: string;
  /**
  * Mitigation action configured for medium risk requests - in UPPER CASE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration#mitigation_action_for_medium_risk AtoEndpointMitigationConfiguration#mitigation_action_for_medium_risk}
  */
  readonly mitigationActionForMediumRisk: string;
  /**
  * Site ID to get the allowlist for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration#site_id AtoEndpointMitigationConfiguration#site_id}
  */
  readonly siteId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration incapsula_ato_endpoint_mitigation_configuration}
*/
export class AtoEndpointMitigationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_ato_endpoint_mitigation_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AtoEndpointMitigationConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AtoEndpointMitigationConfiguration to import
  * @param importFromId The id of the existing AtoEndpointMitigationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AtoEndpointMitigationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_ato_endpoint_mitigation_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/ato_endpoint_mitigation_configuration incapsula_ato_endpoint_mitigation_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AtoEndpointMitigationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AtoEndpointMitigationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_ato_endpoint_mitigation_configuration',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._mitigationActionForHighRisk = config.mitigationActionForHighRisk;
    this._mitigationActionForLowRisk = config.mitigationActionForLowRisk;
    this._mitigationActionForMediumRisk = config.mitigationActionForMediumRisk;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // mitigation_action_for_high_risk - computed: false, optional: false, required: true
  private _mitigationActionForHighRisk?: string; 
  public get mitigationActionForHighRisk() {
    return this.getStringAttribute('mitigation_action_for_high_risk');
  }
  public set mitigationActionForHighRisk(value: string) {
    this._mitigationActionForHighRisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationActionForHighRiskInput() {
    return this._mitigationActionForHighRisk;
  }

  // mitigation_action_for_low_risk - computed: false, optional: false, required: true
  private _mitigationActionForLowRisk?: string; 
  public get mitigationActionForLowRisk() {
    return this.getStringAttribute('mitigation_action_for_low_risk');
  }
  public set mitigationActionForLowRisk(value: string) {
    this._mitigationActionForLowRisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationActionForLowRiskInput() {
    return this._mitigationActionForLowRisk;
  }

  // mitigation_action_for_medium_risk - computed: false, optional: false, required: true
  private _mitigationActionForMediumRisk?: string; 
  public get mitigationActionForMediumRisk() {
    return this.getStringAttribute('mitigation_action_for_medium_risk');
  }
  public set mitigationActionForMediumRisk(value: string) {
    this._mitigationActionForMediumRisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationActionForMediumRiskInput() {
    return this._mitigationActionForMediumRisk;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      endpoint_id: cdktf.stringToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      mitigation_action_for_high_risk: cdktf.stringToTerraform(this._mitigationActionForHighRisk),
      mitigation_action_for_low_risk: cdktf.stringToTerraform(this._mitigationActionForLowRisk),
      mitigation_action_for_medium_risk: cdktf.stringToTerraform(this._mitigationActionForMediumRisk),
      site_id: cdktf.numberToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint_id: {
        value: cdktf.stringToHclTerraform(this._endpointId),
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
      mitigation_action_for_high_risk: {
        value: cdktf.stringToHclTerraform(this._mitigationActionForHighRisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mitigation_action_for_low_risk: {
        value: cdktf.stringToHclTerraform(this._mitigationActionForLowRisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mitigation_action_for_medium_risk: {
        value: cdktf.stringToHclTerraform(this._mitigationActionForMediumRisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
