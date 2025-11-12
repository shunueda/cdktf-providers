// https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy that defines which devices and users are allowed to connect in your network. Can be either a JSON or a HuJSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/acl#acl Acl#acl}
  */
  readonly acl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/acl#id Acl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, will skip requirement to import acl before allowing changes. Be careful, can cause ACL to be overwritten
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/acl#overwrite_existing_content Acl#overwrite_existing_content}
  */
  readonly overwriteExistingContent?: boolean | cdktf.IResolvable;
  /**
  * If true, will reset the ACL for the Tailnet to the default when this resource is destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/acl#reset_acl_on_destroy Acl#reset_acl_on_destroy}
  */
  readonly resetAclOnDestroy?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/acl tailscale_acl}
*/
export class Acl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailscale_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Acl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Acl to import
  * @param importFromId The id of the existing Acl that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Acl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailscale_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/acl tailscale_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclConfig
  */
  public constructor(scope: Construct, id: string, config: AclConfig) {
    super(scope, id, {
      terraformResourceType: 'tailscale_acl',
      terraformGeneratorMetadata: {
        providerName: 'tailscale',
        providerVersion: '0.24.0',
        providerVersionConstraint: '0.24.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._id = config.id;
    this._overwriteExistingContent = config.overwriteExistingContent;
    this._resetAclOnDestroy = config.resetAclOnDestroy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: false, required: true
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
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

  // overwrite_existing_content - computed: false, optional: true, required: false
  private _overwriteExistingContent?: boolean | cdktf.IResolvable; 
  public get overwriteExistingContent() {
    return this.getBooleanAttribute('overwrite_existing_content');
  }
  public set overwriteExistingContent(value: boolean | cdktf.IResolvable) {
    this._overwriteExistingContent = value;
  }
  public resetOverwriteExistingContent() {
    this._overwriteExistingContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingContentInput() {
    return this._overwriteExistingContent;
  }

  // reset_acl_on_destroy - computed: false, optional: true, required: false
  private _resetAclOnDestroy?: boolean | cdktf.IResolvable; 
  public get resetAclOnDestroy() {
    return this.getBooleanAttribute('reset_acl_on_destroy');
  }
  public set resetAclOnDestroy(value: boolean | cdktf.IResolvable) {
    this._resetAclOnDestroy = value;
  }
  public resetResetAclOnDestroy() {
    this._resetAclOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetAclOnDestroyInput() {
    return this._resetAclOnDestroy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      id: cdktf.stringToTerraform(this._id),
      overwrite_existing_content: cdktf.booleanToTerraform(this._overwriteExistingContent),
      reset_acl_on_destroy: cdktf.booleanToTerraform(this._resetAclOnDestroy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
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
      overwrite_existing_content: {
        value: cdktf.booleanToHclTerraform(this._overwriteExistingContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reset_acl_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._resetAclOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
