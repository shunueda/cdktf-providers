// https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/host#description Host#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/host#force Host#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/host#fqdn Host#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/host#managedby_hosts Host#managedby_hosts}
  */
  readonly managedbyHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/host#random Host#random}
  */
  readonly random?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/host#userpassword Host#userpassword}
  */
  readonly userpassword?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/host freeipa_host}
*/
export class Host extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Host to import
  * @param importFromId The id of the existing Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Host to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/host freeipa_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostConfig
  */
  public constructor(scope: Construct, id: string, config: HostConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_host',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '1.0.0'
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
    this._force = config.force;
    this._fqdn = config.fqdn;
    this._managedbyHosts = config.managedbyHosts;
    this._random = config.random;
    this._userpassword = config.userpassword;
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

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // managedby_hosts - computed: true, optional: true, required: false
  private _managedbyHosts?: string[]; 
  public get managedbyHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('managedby_hosts'));
  }
  public set managedbyHosts(value: string[]) {
    this._managedbyHosts = value;
  }
  public resetManagedbyHosts() {
    this._managedbyHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedbyHostsInput() {
    return this._managedbyHosts;
  }

  // random - computed: false, optional: true, required: false
  private _random?: boolean | cdktf.IResolvable; 
  public get random() {
    return this.getBooleanAttribute('random');
  }
  public set random(value: boolean | cdktf.IResolvable) {
    this._random = value;
  }
  public resetRandom() {
    this._random = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomInput() {
    return this._random;
  }

  // randompassword - computed: true, optional: false, required: false
  public get randompassword() {
    return this.getStringAttribute('randompassword');
  }

  // userpassword - computed: false, optional: true, required: false
  private _userpassword?: string; 
  public get userpassword() {
    return this.getStringAttribute('userpassword');
  }
  public set userpassword(value: string) {
    this._userpassword = value;
  }
  public resetUserpassword() {
    this._userpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userpasswordInput() {
    return this._userpassword;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force: cdktf.booleanToTerraform(this._force),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      managedby_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedbyHosts),
      random: cdktf.booleanToTerraform(this._random),
      userpassword: cdktf.stringToTerraform(this._userpassword),
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
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managedby_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedbyHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      random: {
        value: cdktf.booleanToHclTerraform(this._random),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      userpassword: {
        value: cdktf.stringToHclTerraform(this._userpassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
