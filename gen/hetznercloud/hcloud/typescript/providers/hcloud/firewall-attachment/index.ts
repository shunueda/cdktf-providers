// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/firewall_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/firewall_attachment#firewall_id FirewallAttachment#firewall_id}
  */
  readonly firewallId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/firewall_attachment#id FirewallAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/firewall_attachment#label_selectors FirewallAttachment#label_selectors}
  */
  readonly labelSelectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/firewall_attachment#server_ids FirewallAttachment#server_ids}
  */
  readonly serverIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/firewall_attachment hcloud_firewall_attachment}
*/
export class FirewallAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_firewall_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallAttachment to import
  * @param importFromId The id of the existing FirewallAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/firewall_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_firewall_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/firewall_attachment hcloud_firewall_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'hcloud_firewall_attachment',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.57.0',
        providerVersionConstraint: '1.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firewallId = config.firewallId;
    this._id = config.id;
    this._labelSelectors = config.labelSelectors;
    this._serverIds = config.serverIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_id - computed: false, optional: false, required: true
  private _firewallId?: number; 
  public get firewallId() {
    return this.getNumberAttribute('firewall_id');
  }
  public set firewallId(value: number) {
    this._firewallId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
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

  // label_selectors - computed: false, optional: true, required: false
  private _labelSelectors?: string[]; 
  public get labelSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('label_selectors'));
  }
  public set labelSelectors(value: string[]) {
    this._labelSelectors = value;
  }
  public resetLabelSelectors() {
    this._labelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorsInput() {
    return this._labelSelectors;
  }

  // server_ids - computed: false, optional: true, required: false
  private _serverIds?: number[]; 
  public get serverIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('server_ids')));
  }
  public set serverIds(value: number[]) {
    this._serverIds = value;
  }
  public resetServerIds() {
    this._serverIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdsInput() {
    return this._serverIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_id: cdktf.numberToTerraform(this._firewallId),
      id: cdktf.stringToTerraform(this._id),
      label_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labelSelectors),
      server_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._serverIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firewall_id: {
        value: cdktf.numberToHclTerraform(this._firewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labelSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._serverIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
