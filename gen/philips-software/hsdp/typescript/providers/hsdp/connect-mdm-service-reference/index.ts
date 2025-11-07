// https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectMdmServiceReferenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference#application_id ConnectMdmServiceReference#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference#bootstrap_enabled ConnectMdmServiceReference#bootstrap_enabled}
  */
  readonly bootstrapEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference#description ConnectMdmServiceReference#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference#id ConnectMdmServiceReference#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference#matching_rule ConnectMdmServiceReference#matching_rule}
  */
  readonly matchingRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference#name ConnectMdmServiceReference#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference#service_action_ids ConnectMdmServiceReference#service_action_ids}
  */
  readonly serviceActionIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference#standard_service_id ConnectMdmServiceReference#standard_service_id}
  */
  readonly standardServiceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference hsdp_connect_mdm_service_reference}
*/
export class ConnectMdmServiceReference extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_service_reference";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectMdmServiceReference resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMdmServiceReference to import
  * @param importFromId The id of the existing ConnectMdmServiceReference that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMdmServiceReference to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_service_reference", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_service_reference hsdp_connect_mdm_service_reference} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMdmServiceReferenceConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMdmServiceReferenceConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_service_reference',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._bootstrapEnabled = config.bootstrapEnabled;
    this._description = config.description;
    this._id = config.id;
    this._matchingRule = config.matchingRule;
    this._name = config.name;
    this._serviceActionIds = config.serviceActionIds;
    this._standardServiceId = config.standardServiceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // bootstrap_enabled - computed: false, optional: true, required: false
  private _bootstrapEnabled?: boolean | cdktf.IResolvable; 
  public get bootstrapEnabled() {
    return this.getBooleanAttribute('bootstrap_enabled');
  }
  public set bootstrapEnabled(value: boolean | cdktf.IResolvable) {
    this._bootstrapEnabled = value;
  }
  public resetBootstrapEnabled() {
    this._bootstrapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapEnabledInput() {
    return this._bootstrapEnabled;
  }

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

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // matching_rule - computed: false, optional: true, required: false
  private _matchingRule?: string; 
  public get matchingRule() {
    return this.getStringAttribute('matching_rule');
  }
  public set matchingRule(value: string) {
    this._matchingRule = value;
  }
  public resetMatchingRule() {
    this._matchingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleInput() {
    return this._matchingRule;
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

  // service_action_ids - computed: false, optional: false, required: true
  private _serviceActionIds?: string[]; 
  public get serviceActionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('service_action_ids'));
  }
  public set serviceActionIds(value: string[]) {
    this._serviceActionIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceActionIdsInput() {
    return this._serviceActionIds;
  }

  // standard_service_id - computed: false, optional: false, required: true
  private _standardServiceId?: string; 
  public get standardServiceId() {
    return this.getStringAttribute('standard_service_id');
  }
  public set standardServiceId(value: string) {
    this._standardServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardServiceIdInput() {
    return this._standardServiceId;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      bootstrap_enabled: cdktf.booleanToTerraform(this._bootstrapEnabled),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      matching_rule: cdktf.stringToTerraform(this._matchingRule),
      name: cdktf.stringToTerraform(this._name),
      service_action_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceActionIds),
      standard_service_id: cdktf.stringToTerraform(this._standardServiceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_enabled: {
        value: cdktf.booleanToHclTerraform(this._bootstrapEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      matching_rule: {
        value: cdktf.stringToHclTerraform(this._matchingRule),
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
      service_action_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceActionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      standard_service_id: {
        value: cdktf.stringToHclTerraform(this._standardServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
