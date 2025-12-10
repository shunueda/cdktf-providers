// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TacacsServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unknown Tacacs+ attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server#attribute_allow_unknown TacacsServer#attribute_allow_unknown}
  */
  readonly attributeAllowUnknown?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server#delete_mode TacacsServer#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server#device TacacsServer#device}
  */
  readonly device?: string;
  /**
  * Allow user to specify tacacs server to use with `@server'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server#directed_request TacacsServer#directed_request}
  */
  readonly directedRequest?: boolean | cdktf.IResolvable;
  /**
  * Do not truncate the @hostname from username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server#directed_request_no_truncate TacacsServer#directed_request_no_truncate}
  */
  readonly directedRequestNoTruncate?: boolean | cdktf.IResolvable;
  /**
  * restrict queries to directed request servers only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server#directed_request_restricted TacacsServer#directed_request_restricted}
  */
  readonly directedRequestRestricted?: boolean | cdktf.IResolvable;
  /**
  * 0 - Specifies an UNENCRYPTED key will follow 6 - Specifies an ENCRYPTED key will follow 7 - Specifies HIDDEN key will follow
  *   - Choices: `0`, `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server#encryption TacacsServer#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server#key TacacsServer#key}
  */
  readonly key?: string;
  /**
  * Time to wait for a TACACS server to reply
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server#timeout TacacsServer#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server iosxe_tacacs_server}
*/
export class TacacsServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_tacacs_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TacacsServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TacacsServer to import
  * @param importFromId The id of the existing TacacsServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TacacsServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_tacacs_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/tacacs_server iosxe_tacacs_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TacacsServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TacacsServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_tacacs_server',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeAllowUnknown = config.attributeAllowUnknown;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._directedRequest = config.directedRequest;
    this._directedRequestNoTruncate = config.directedRequestNoTruncate;
    this._directedRequestRestricted = config.directedRequestRestricted;
    this._encryption = config.encryption;
    this._key = config.key;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_allow_unknown - computed: false, optional: true, required: false
  private _attributeAllowUnknown?: boolean | cdktf.IResolvable; 
  public get attributeAllowUnknown() {
    return this.getBooleanAttribute('attribute_allow_unknown');
  }
  public set attributeAllowUnknown(value: boolean | cdktf.IResolvable) {
    this._attributeAllowUnknown = value;
  }
  public resetAttributeAllowUnknown() {
    this._attributeAllowUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeAllowUnknownInput() {
    return this._attributeAllowUnknown;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // directed_request - computed: false, optional: true, required: false
  private _directedRequest?: boolean | cdktf.IResolvable; 
  public get directedRequest() {
    return this.getBooleanAttribute('directed_request');
  }
  public set directedRequest(value: boolean | cdktf.IResolvable) {
    this._directedRequest = value;
  }
  public resetDirectedRequest() {
    this._directedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directedRequestInput() {
    return this._directedRequest;
  }

  // directed_request_no_truncate - computed: false, optional: true, required: false
  private _directedRequestNoTruncate?: boolean | cdktf.IResolvable; 
  public get directedRequestNoTruncate() {
    return this.getBooleanAttribute('directed_request_no_truncate');
  }
  public set directedRequestNoTruncate(value: boolean | cdktf.IResolvable) {
    this._directedRequestNoTruncate = value;
  }
  public resetDirectedRequestNoTruncate() {
    this._directedRequestNoTruncate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directedRequestNoTruncateInput() {
    return this._directedRequestNoTruncate;
  }

  // directed_request_restricted - computed: false, optional: true, required: false
  private _directedRequestRestricted?: boolean | cdktf.IResolvable; 
  public get directedRequestRestricted() {
    return this.getBooleanAttribute('directed_request_restricted');
  }
  public set directedRequestRestricted(value: boolean | cdktf.IResolvable) {
    this._directedRequestRestricted = value;
  }
  public resetDirectedRequestRestricted() {
    this._directedRequestRestricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directedRequestRestrictedInput() {
    return this._directedRequestRestricted;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_allow_unknown: cdktf.booleanToTerraform(this._attributeAllowUnknown),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      directed_request: cdktf.booleanToTerraform(this._directedRequest),
      directed_request_no_truncate: cdktf.booleanToTerraform(this._directedRequestNoTruncate),
      directed_request_restricted: cdktf.booleanToTerraform(this._directedRequestRestricted),
      encryption: cdktf.stringToTerraform(this._encryption),
      key: cdktf.stringToTerraform(this._key),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_allow_unknown: {
        value: cdktf.booleanToHclTerraform(this._attributeAllowUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directed_request: {
        value: cdktf.booleanToHclTerraform(this._directedRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directed_request_no_truncate: {
        value: cdktf.booleanToHclTerraform(this._directedRequestNoTruncate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directed_request_restricted: {
        value: cdktf.booleanToHclTerraform(this._directedRequestRestricted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption: {
        value: cdktf.stringToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
