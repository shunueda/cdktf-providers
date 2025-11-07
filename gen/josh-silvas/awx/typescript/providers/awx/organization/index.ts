// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Local absolute file path containing a custom Python virtualenv to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization#custom_virtualenv Organization#custom_virtualenv}
  */
  readonly customVirtualenv?: string;
  /**
  * The default execution environment for jobs run by this organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization#default_environment Organization#default_environment}
  */
  readonly defaultEnvironment?: string;
  /**
  * The description of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization#description Organization#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization#id Organization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of hosts allowed to be managed by this organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization#max_hosts Organization#max_hosts}
  */
  readonly maxHosts?: number;
  /**
  * The name of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization#name Organization#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization awx_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization awx_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_organization',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customVirtualenv = config.customVirtualenv;
    this._defaultEnvironment = config.defaultEnvironment;
    this._description = config.description;
    this._id = config.id;
    this._maxHosts = config.maxHosts;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_virtualenv - computed: false, optional: true, required: false
  private _customVirtualenv?: string; 
  public get customVirtualenv() {
    return this.getStringAttribute('custom_virtualenv');
  }
  public set customVirtualenv(value: string) {
    this._customVirtualenv = value;
  }
  public resetCustomVirtualenv() {
    this._customVirtualenv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualenvInput() {
    return this._customVirtualenv;
  }

  // default_environment - computed: false, optional: true, required: false
  private _defaultEnvironment?: string; 
  public get defaultEnvironment() {
    return this.getStringAttribute('default_environment');
  }
  public set defaultEnvironment(value: string) {
    this._defaultEnvironment = value;
  }
  public resetDefaultEnvironment() {
    this._defaultEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEnvironmentInput() {
    return this._defaultEnvironment;
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

  // max_hosts - computed: false, optional: true, required: false
  private _maxHosts?: number; 
  public get maxHosts() {
    return this.getNumberAttribute('max_hosts');
  }
  public set maxHosts(value: number) {
    this._maxHosts = value;
  }
  public resetMaxHosts() {
    this._maxHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHostsInput() {
    return this._maxHosts;
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
      custom_virtualenv: cdktf.stringToTerraform(this._customVirtualenv),
      default_environment: cdktf.stringToTerraform(this._defaultEnvironment),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      max_hosts: cdktf.numberToTerraform(this._maxHosts),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_virtualenv: {
        value: cdktf.stringToHclTerraform(this._customVirtualenv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_environment: {
        value: cdktf.stringToHclTerraform(this._defaultEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      max_hosts: {
        value: cdktf.numberToHclTerraform(this._maxHosts),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
