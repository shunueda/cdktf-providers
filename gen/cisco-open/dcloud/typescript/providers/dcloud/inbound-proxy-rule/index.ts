// https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InboundProxyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule#hyperlink InboundProxyRule#hyperlink}
  */
  readonly hyperlink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule#id InboundProxyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule#nic_uid InboundProxyRule#nic_uid}
  */
  readonly nicUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule#show_hyperlink InboundProxyRule#show_hyperlink}
  */
  readonly showHyperlink?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule#ssl InboundProxyRule#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule#tcp_port InboundProxyRule#tcp_port}
  */
  readonly tcpPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule#topology_uid InboundProxyRule#topology_uid}
  */
  readonly topologyUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule#url_path InboundProxyRule#url_path}
  */
  readonly urlPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule dcloud_inbound_proxy_rule}
*/
export class InboundProxyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcloud_inbound_proxy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InboundProxyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InboundProxyRule to import
  * @param importFromId The id of the existing InboundProxyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InboundProxyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcloud_inbound_proxy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/inbound_proxy_rule dcloud_inbound_proxy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InboundProxyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: InboundProxyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'dcloud_inbound_proxy_rule',
      terraformGeneratorMetadata: {
        providerName: 'dcloud',
        providerVersion: '0.1.29',
        providerVersionConstraint: '0.1.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hyperlink = config.hyperlink;
    this._id = config.id;
    this._nicUid = config.nicUid;
    this._showHyperlink = config.showHyperlink;
    this._ssl = config.ssl;
    this._tcpPort = config.tcpPort;
    this._topologyUid = config.topologyUid;
    this._urlPath = config.urlPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hyperlink - computed: false, optional: false, required: true
  private _hyperlink?: string; 
  public get hyperlink() {
    return this.getStringAttribute('hyperlink');
  }
  public set hyperlink(value: string) {
    this._hyperlink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperlinkInput() {
    return this._hyperlink;
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

  // nic_ip_address - computed: true, optional: false, required: false
  public get nicIpAddress() {
    return this.getStringAttribute('nic_ip_address');
  }

  // nic_uid - computed: false, optional: false, required: true
  private _nicUid?: string; 
  public get nicUid() {
    return this.getStringAttribute('nic_uid');
  }
  public set nicUid(value: string) {
    this._nicUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicUidInput() {
    return this._nicUid;
  }

  // show_hyperlink - computed: false, optional: true, required: false
  private _showHyperlink?: boolean | cdktf.IResolvable; 
  public get showHyperlink() {
    return this.getBooleanAttribute('show_hyperlink');
  }
  public set showHyperlink(value: boolean | cdktf.IResolvable) {
    this._showHyperlink = value;
  }
  public resetShowHyperlink() {
    this._showHyperlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHyperlinkInput() {
    return this._showHyperlink;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // target_vm_name - computed: true, optional: false, required: false
  public get targetVmName() {
    return this.getStringAttribute('target_vm_name');
  }

  // tcp_port - computed: false, optional: false, required: true
  private _tcpPort?: number; 
  public get tcpPort() {
    return this.getNumberAttribute('tcp_port');
  }
  public set tcpPort(value: number) {
    this._tcpPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortInput() {
    return this._tcpPort;
  }

  // topology_uid - computed: false, optional: false, required: true
  private _topologyUid?: string; 
  public get topologyUid() {
    return this.getStringAttribute('topology_uid');
  }
  public set topologyUid(value: string) {
    this._topologyUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyUidInput() {
    return this._topologyUid;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url_path - computed: false, optional: false, required: true
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hyperlink: cdktf.stringToTerraform(this._hyperlink),
      id: cdktf.stringToTerraform(this._id),
      nic_uid: cdktf.stringToTerraform(this._nicUid),
      show_hyperlink: cdktf.booleanToTerraform(this._showHyperlink),
      ssl: cdktf.booleanToTerraform(this._ssl),
      tcp_port: cdktf.numberToTerraform(this._tcpPort),
      topology_uid: cdktf.stringToTerraform(this._topologyUid),
      url_path: cdktf.stringToTerraform(this._urlPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hyperlink: {
        value: cdktf.stringToHclTerraform(this._hyperlink),
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
      nic_uid: {
        value: cdktf.stringToHclTerraform(this._nicUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_hyperlink: {
        value: cdktf.booleanToHclTerraform(this._showHyperlink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_port: {
        value: cdktf.numberToHclTerraform(this._tcpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topology_uid: {
        value: cdktf.stringToHclTerraform(this._topologyUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_path: {
        value: cdktf.stringToHclTerraform(this._urlPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
