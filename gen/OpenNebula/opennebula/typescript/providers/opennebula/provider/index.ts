// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpennebulaProviderConfig {
  /**
  * The URL to your public or private OpenNebula
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs#endpoint OpennebulaProvider#endpoint}
  */
  readonly endpoint: string;
  /**
  * The URL to your public or private OpenNebula Flow server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs#flow_endpoint OpennebulaProvider#flow_endpoint}
  */
  readonly flowEndpoint?: string;
  /**
  * Disable TLS validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs#insecure OpennebulaProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The password for the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs#password OpennebulaProvider#password}
  */
  readonly password: string;
  /**
  * The ID of the user to identify as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs#username OpennebulaProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs#alias OpennebulaProvider#alias}
  */
  readonly alias?: string;
  /**
  * default_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs#default_tags OpennebulaProvider#default_tags}
  */
  readonly defaultTags?: OpennebulaProviderDefaultTags[] | cdktf.IResolvable;
}
export interface OpennebulaProviderDefaultTags {
  /**
  * Default tags to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs#tags OpennebulaProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function opennebulaProviderDefaultTagsToTerraform(struct?: OpennebulaProviderDefaultTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function opennebulaProviderDefaultTagsToHclTerraform(struct?: OpennebulaProviderDefaultTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs opennebula}
*/
export class OpennebulaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpennebulaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpennebulaProvider to import
  * @param importFromId The id of the existing OpennebulaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpennebulaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs opennebula} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpennebulaProviderConfig
  */
  public constructor(scope: Construct, id: string, config: OpennebulaProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0'
      },
      terraformProviderSource: 'OpenNebula/opennebula'
    });
    this._endpoint = config.endpoint;
    this._flowEndpoint = config.flowEndpoint;
    this._insecure = config.insecure;
    this._password = config.password;
    this._username = config.username;
    this._alias = config.alias;
    this._defaultTags = config.defaultTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // flow_endpoint - computed: false, optional: true, required: false
  private _flowEndpoint?: string; 
  public get flowEndpoint() {
    return this._flowEndpoint;
  }
  public set flowEndpoint(value: string | undefined) {
    this._flowEndpoint = value;
  }
  public resetFlowEndpoint() {
    this._flowEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowEndpointInput() {
    return this._flowEndpoint;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: OpennebulaProviderDefaultTags[] | cdktf.IResolvable; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: OpennebulaProviderDefaultTags[] | cdktf.IResolvable | undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      flow_endpoint: cdktf.stringToTerraform(this._flowEndpoint),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      default_tags: cdktf.listMapper(opennebulaProviderDefaultTagsToTerraform, true)(this._defaultTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_endpoint: {
        value: cdktf.stringToHclTerraform(this._flowEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_tags: {
        value: cdktf.listMapperHcl(opennebulaProviderDefaultTagsToHclTerraform, true)(this._defaultTags),
        isBlock: true,
        type: "set",
        storageClassType: "OpennebulaProviderDefaultTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
