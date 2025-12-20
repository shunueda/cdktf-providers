// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_timeout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmSessionTimeoutConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_timeout#device DataScmSessionTimeout#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_timeout#folder DataScmSessionTimeout#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_timeout#id DataScmSessionTimeout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_timeout#snippet DataScmSessionTimeout#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmSessionTimeoutSessionTimeouts {
}

export function dataScmSessionTimeoutSessionTimeoutsToTerraform(struct?: DataScmSessionTimeoutSessionTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSessionTimeoutSessionTimeoutsToHclTerraform(struct?: DataScmSessionTimeoutSessionTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSessionTimeoutSessionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSessionTimeoutSessionTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSessionTimeoutSessionTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timeout_captive_portal - computed: true, optional: false, required: false
  public get timeoutCaptivePortal() {
    return this.getNumberAttribute('timeout_captive_portal');
  }

  // timeout_default - computed: true, optional: false, required: false
  public get timeoutDefault() {
    return this.getNumberAttribute('timeout_default');
  }

  // timeout_discard_default - computed: true, optional: false, required: false
  public get timeoutDiscardDefault() {
    return this.getNumberAttribute('timeout_discard_default');
  }

  // timeout_discard_tcp - computed: true, optional: false, required: false
  public get timeoutDiscardTcp() {
    return this.getNumberAttribute('timeout_discard_tcp');
  }

  // timeout_discard_udp - computed: true, optional: false, required: false
  public get timeoutDiscardUdp() {
    return this.getNumberAttribute('timeout_discard_udp');
  }

  // timeout_icmp - computed: true, optional: false, required: false
  public get timeoutIcmp() {
    return this.getNumberAttribute('timeout_icmp');
  }

  // timeout_scan - computed: true, optional: false, required: false
  public get timeoutScan() {
    return this.getNumberAttribute('timeout_scan');
  }

  // timeout_tcp - computed: true, optional: false, required: false
  public get timeoutTcp() {
    return this.getNumberAttribute('timeout_tcp');
  }

  // timeout_tcp_half_closed - computed: true, optional: false, required: false
  public get timeoutTcpHalfClosed() {
    return this.getNumberAttribute('timeout_tcp_half_closed');
  }

  // timeout_tcp_time_wait - computed: true, optional: false, required: false
  public get timeoutTcpTimeWait() {
    return this.getNumberAttribute('timeout_tcp_time_wait');
  }

  // timeout_tcp_unverified_rst - computed: true, optional: false, required: false
  public get timeoutTcpUnverifiedRst() {
    return this.getNumberAttribute('timeout_tcp_unverified_rst');
  }

  // timeout_tcphandshake - computed: true, optional: false, required: false
  public get timeoutTcphandshake() {
    return this.getNumberAttribute('timeout_tcphandshake');
  }

  // timeout_tcpinit - computed: true, optional: false, required: false
  public get timeoutTcpinit() {
    return this.getNumberAttribute('timeout_tcpinit');
  }

  // timeout_udp - computed: true, optional: false, required: false
  public get timeoutUdp() {
    return this.getNumberAttribute('timeout_udp');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_timeout scm_session_timeout}
*/
export class DataScmSessionTimeout extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_session_timeout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmSessionTimeout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmSessionTimeout to import
  * @param importFromId The id of the existing DataScmSessionTimeout that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_timeout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmSessionTimeout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_session_timeout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/session_timeout scm_session_timeout} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmSessionTimeoutConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmSessionTimeoutConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_session_timeout',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._id = config.id;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: true, optional: true, required: false
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

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // session_timeouts - computed: true, optional: false, required: false
  private _sessionTimeouts = new DataScmSessionTimeoutSessionTimeoutsOutputReference(this, "session_timeouts");
  public get sessionTimeouts() {
    return this._sessionTimeouts;
  }

  // snippet - computed: true, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
