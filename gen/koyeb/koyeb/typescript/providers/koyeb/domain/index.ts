// https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The app name the domain is assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/domain#app_name Domain#app_name}
  */
  readonly appName?: string;
  /**
  * The deployment group assigned to the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/domain#deployment_group Domain#deployment_group}
  */
  readonly deploymentGroup?: string;
  /**
  * The CNAME record to point the domain to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/domain#intended_cname Domain#intended_cname}
  */
  readonly intendedCname?: string;
  /**
  * The status messages of the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/domain#messages Domain#messages}
  */
  readonly messages?: string;
  /**
  * The domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * The date and time of when the domain was last verified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/domain#verified_at Domain#verified_at}
  */
  readonly verifiedAt?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/domain koyeb_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "koyeb_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "koyeb_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/koyeb/koyeb/0.1.11/docs/resources/domain koyeb_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'koyeb_domain',
      terraformGeneratorMetadata: {
        providerName: 'koyeb',
        providerVersion: '0.1.11',
        providerVersionConstraint: '0.1.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._deploymentGroup = config.deploymentGroup;
    this._intendedCname = config.intendedCname;
    this._messages = config.messages;
    this._name = config.name;
    this._verifiedAt = config.verifiedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deployment_group - computed: true, optional: true, required: false
  private _deploymentGroup?: string; 
  public get deploymentGroup() {
    return this.getStringAttribute('deployment_group');
  }
  public set deploymentGroup(value: string) {
    this._deploymentGroup = value;
  }
  public resetDeploymentGroup() {
    this._deploymentGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentGroupInput() {
    return this._deploymentGroup;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intended_cname - computed: true, optional: true, required: false
  private _intendedCname?: string; 
  public get intendedCname() {
    return this.getStringAttribute('intended_cname');
  }
  public set intendedCname(value: string) {
    this._intendedCname = value;
  }
  public resetIntendedCname() {
    this._intendedCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intendedCnameInput() {
    return this._intendedCname;
  }

  // messages - computed: true, optional: true, required: false
  private _messages?: string; 
  public get messages() {
    return this.getStringAttribute('messages');
  }
  public set messages(value: string) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // verified_at - computed: true, optional: true, required: false
  private _verifiedAt?: string; 
  public get verifiedAt() {
    return this.getStringAttribute('verified_at');
  }
  public set verifiedAt(value: string) {
    this._verifiedAt = value;
  }
  public resetVerifiedAt() {
    this._verifiedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedAtInput() {
    return this._verifiedAt;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      deployment_group: cdktf.stringToTerraform(this._deploymentGroup),
      intended_cname: cdktf.stringToTerraform(this._intendedCname),
      messages: cdktf.stringToTerraform(this._messages),
      name: cdktf.stringToTerraform(this._name),
      verified_at: cdktf.stringToTerraform(this._verifiedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_group: {
        value: cdktf.stringToHclTerraform(this._deploymentGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intended_cname: {
        value: cdktf.stringToHclTerraform(this._intendedCname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messages: {
        value: cdktf.stringToHclTerraform(this._messages),
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
      verified_at: {
        value: cdktf.stringToHclTerraform(this._verifiedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
