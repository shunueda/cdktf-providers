// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/dmr_cluster_link_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmrClusterLinkAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Attribute.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/dmr_cluster_link_attribute#attribute_name DmrClusterLinkAttribute#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The value of the Attribute.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/dmr_cluster_link_attribute#attribute_value DmrClusterLinkAttribute#attribute_value}
  */
  readonly attributeValue: string;
  /**
  * The name of the Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/dmr_cluster_link_attribute#dmr_cluster_name DmrClusterLinkAttribute#dmr_cluster_name}
  */
  readonly dmrClusterName: string;
  /**
  * The name of the node at the remote end of the Link.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/dmr_cluster_link_attribute#remote_node_name DmrClusterLinkAttribute#remote_node_name}
  */
  readonly remoteNodeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/dmr_cluster_link_attribute solacebroker_dmr_cluster_link_attribute}
*/
export class DmrClusterLinkAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_dmr_cluster_link_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmrClusterLinkAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmrClusterLinkAttribute to import
  * @param importFromId The id of the existing DmrClusterLinkAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/dmr_cluster_link_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmrClusterLinkAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_dmr_cluster_link_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/dmr_cluster_link_attribute solacebroker_dmr_cluster_link_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmrClusterLinkAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DmrClusterLinkAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_dmr_cluster_link_attribute',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeName = config.attributeName;
    this._attributeValue = config.attributeValue;
    this._dmrClusterName = config.dmrClusterName;
    this._remoteNodeName = config.remoteNodeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // dmr_cluster_name - computed: false, optional: false, required: true
  private _dmrClusterName?: string; 
  public get dmrClusterName() {
    return this.getStringAttribute('dmr_cluster_name');
  }
  public set dmrClusterName(value: string) {
    this._dmrClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dmrClusterNameInput() {
    return this._dmrClusterName;
  }

  // remote_node_name - computed: false, optional: false, required: true
  private _remoteNodeName?: string; 
  public get remoteNodeName() {
    return this.getStringAttribute('remote_node_name');
  }
  public set remoteNodeName(value: string) {
    this._remoteNodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNodeNameInput() {
    return this._remoteNodeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      attribute_value: cdktf.stringToTerraform(this._attributeValue),
      dmr_cluster_name: cdktf.stringToTerraform(this._dmrClusterName),
      remote_node_name: cdktf.stringToTerraform(this._remoteNodeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_name: {
        value: cdktf.stringToHclTerraform(this._attributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_value: {
        value: cdktf.stringToHclTerraform(this._attributeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dmr_cluster_name: {
        value: cdktf.stringToHclTerraform(this._dmrClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_node_name: {
        value: cdktf.stringToHclTerraform(this._remoteNodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
