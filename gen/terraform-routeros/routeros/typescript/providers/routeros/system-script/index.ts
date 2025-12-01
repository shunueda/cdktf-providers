// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script#___path___ SystemScript#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script#___skip___ SystemScript#___skip___}
  */
  readonly skip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script#comment SystemScript#comment}
  */
  readonly comment?: string;
  /**
  * Bypass permissions check when the script is being executed, useful when scripts are being executed from services that have limited permissions, such as Netwatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script#dont_require_permissions SystemScript#dont_require_permissions}
  */
  readonly dontRequirePermissions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script#id SystemScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Changing the attribute value causes the script to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script#launch_trigger SystemScript#launch_trigger}
  */
  readonly launchTrigger?: string;
  /**
  * Name of the script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script#name SystemScript#name}
  */
  readonly name: string;
  /**
  * List of applicable policies:
  * 	* ftp - Policy that grants full rights to log in remotely via FTP, to read/write/erase files and to transfer files from/to the router. Should be used together with read/write policies.  
  * 	* password - Policy that grants rights to change the password.  
  * 	* policy - Policy that grants user management rights. Should be used together with the write policy. Allows also to see global variables created by other users (requires also 'test' policy).  
  * 	* read - Policy that grants read access to the router's configuration. All console commands that do not alter router's configuration are allowed. Doesn't affect FTP.  
  * 	* reboot - Policy that allows rebooting the router.  
  * 	* sensitive - Policy that grants rights to change "hide sensitive" option, if this policy is disabled sensitive information is not displayed.  
  * 	* sniff - Policy that grants rights to use packet sniffer tool.  
  * 	* test - Policy that grants rights to run ping, traceroute, bandwidth-test, wireless scan, snooper, and other test commands.  
  * 	* write - Policy that grants write access to the router's configuration, except for user management. This policy does not allow to read the configuration, so make sure to enable read policy as well.  
  * policy = ["ftp", "read", "write"]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script#policy SystemScript#policy}
  */
  readonly policy?: string[];
  /**
  * Script source code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script#source SystemScript#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script routeros_system_script}
*/
export class SystemScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemScript to import
  * @param importFromId The id of the existing SystemScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_script routeros_system_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemScriptConfig
  */
  public constructor(scope: Construct, id: string, config: SystemScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_script',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._comment = config.comment;
    this._dontRequirePermissions = config.dontRequirePermissions;
    this._id = config.id;
    this._launchTrigger = config.launchTrigger;
    this._name = config.name;
    this._policy = config.policy;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dont_require_permissions - computed: false, optional: true, required: false
  private _dontRequirePermissions?: boolean | cdktf.IResolvable; 
  public get dontRequirePermissions() {
    return this.getBooleanAttribute('dont_require_permissions');
  }
  public set dontRequirePermissions(value: boolean | cdktf.IResolvable) {
    this._dontRequirePermissions = value;
  }
  public resetDontRequirePermissions() {
    this._dontRequirePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontRequirePermissionsInput() {
    return this._dontRequirePermissions;
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // last_started - computed: true, optional: false, required: false
  public get lastStarted() {
    return this.getStringAttribute('last_started');
  }

  // launch_trigger - computed: false, optional: true, required: false
  private _launchTrigger?: string; 
  public get launchTrigger() {
    return this.getStringAttribute('launch_trigger');
  }
  public set launchTrigger(value: string) {
    this._launchTrigger = value;
  }
  public resetLaunchTrigger() {
    this._launchTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTriggerInput() {
    return this._launchTrigger;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string[]; 
  public get policy() {
    return cdktf.Fn.tolist(this.getListAttribute('policy'));
  }
  public set policy(value: string[]) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // run_count - computed: true, optional: false, required: false
  public get runCount() {
    return this.getStringAttribute('run_count');
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      comment: cdktf.stringToTerraform(this._comment),
      dont_require_permissions: cdktf.booleanToTerraform(this._dontRequirePermissions),
      id: cdktf.stringToTerraform(this._id),
      launch_trigger: cdktf.stringToTerraform(this._launchTrigger),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policy),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dont_require_permissions: {
        value: cdktf.booleanToHclTerraform(this._dontRequirePermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_trigger: {
        value: cdktf.stringToHclTerraform(this._launchTrigger),
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
      policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
