// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the Akamai contract associated with the new configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration#contract_id AppsecConfiguration#contract_id}
  */
  readonly contractId: string;
  /**
  * Unique identifier of the existing configuration being cloned to create the new configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration#create_from_config_id AppsecConfiguration#create_from_config_id}
  */
  readonly createFromConfigId?: number;
  /**
  * Version number of the existing configuration being cloned to create the new configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration#create_from_version AppsecConfiguration#create_from_version}
  */
  readonly createFromVersion?: number;
  /**
  * Brief description of the new configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration#description AppsecConfiguration#description}
  */
  readonly description: string;
  /**
  * Unique identifier of the contract group associated with the new configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration#group_id AppsecConfiguration#group_id}
  */
  readonly groupId: string;
  /**
  * Hostnames to be protected by the new configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration#host_names AppsecConfiguration#host_names}
  */
  readonly hostNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration#id AppsecConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the new configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration#name AppsecConfiguration#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration akamai_appsec_configuration}
*/
export class AppsecConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecConfiguration to import
  * @param importFromId The id of the existing AppsecConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_configuration akamai_appsec_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_configuration',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractId = config.contractId;
    this._createFromConfigId = config.createFromConfigId;
    this._createFromVersion = config.createFromVersion;
    this._description = config.description;
    this._groupId = config.groupId;
    this._hostNames = config.hostNames;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // create_from_config_id - computed: false, optional: true, required: false
  private _createFromConfigId?: number; 
  public get createFromConfigId() {
    return this.getNumberAttribute('create_from_config_id');
  }
  public set createFromConfigId(value: number) {
    this._createFromConfigId = value;
  }
  public resetCreateFromConfigId() {
    this._createFromConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createFromConfigIdInput() {
    return this._createFromConfigId;
  }

  // create_from_version - computed: false, optional: true, required: false
  private _createFromVersion?: number; 
  public get createFromVersion() {
    return this.getNumberAttribute('create_from_version');
  }
  public set createFromVersion(value: number) {
    this._createFromVersion = value;
  }
  public resetCreateFromVersion() {
    this._createFromVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createFromVersionInput() {
    return this._createFromVersion;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // host_names - computed: false, optional: false, required: true
  private _hostNames?: string[]; 
  public get hostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('host_names'));
  }
  public set hostNames(value: string[]) {
    this._hostNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamesInput() {
    return this._hostNames;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_id: cdktf.stringToTerraform(this._contractId),
      create_from_config_id: cdktf.numberToTerraform(this._createFromConfigId),
      create_from_version: cdktf.numberToTerraform(this._createFromVersion),
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.stringToTerraform(this._groupId),
      host_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostNames),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_from_config_id: {
        value: cdktf.numberToHclTerraform(this._createFromConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_from_version: {
        value: cdktf.numberToHclTerraform(this._createFromVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
