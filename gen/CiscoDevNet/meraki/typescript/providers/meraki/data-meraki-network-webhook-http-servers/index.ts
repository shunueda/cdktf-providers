// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/network_webhook_http_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiNetworkWebhookHttpServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/network_webhook_http_servers#network_id DataMerakiNetworkWebhookHttpServers#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiNetworkWebhookHttpServersItems {
}

export function dataMerakiNetworkWebhookHttpServersItemsToTerraform(struct?: DataMerakiNetworkWebhookHttpServersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkWebhookHttpServersItemsToHclTerraform(struct?: DataMerakiNetworkWebhookHttpServersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkWebhookHttpServersItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMerakiNetworkWebhookHttpServersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkWebhookHttpServersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // payload_template_name - computed: true, optional: false, required: false
  public get payloadTemplateName() {
    return this.getStringAttribute('payload_template_name');
  }

  // payload_template_payload_template_id - computed: true, optional: false, required: false
  public get payloadTemplatePayloadTemplateId() {
    return this.getStringAttribute('payload_template_payload_template_id');
  }

  // shared_secret - computed: true, optional: false, required: false
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataMerakiNetworkWebhookHttpServersItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMerakiNetworkWebhookHttpServersItemsOutputReference {
    return new DataMerakiNetworkWebhookHttpServersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/network_webhook_http_servers meraki_network_webhook_http_servers}
*/
export class DataMerakiNetworkWebhookHttpServers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_webhook_http_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiNetworkWebhookHttpServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiNetworkWebhookHttpServers to import
  * @param importFromId The id of the existing DataMerakiNetworkWebhookHttpServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/network_webhook_http_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiNetworkWebhookHttpServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_webhook_http_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/network_webhook_http_servers meraki_network_webhook_http_servers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiNetworkWebhookHttpServersConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiNetworkWebhookHttpServersConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_webhook_http_servers',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiNetworkWebhookHttpServersItemsList(this, "items", true);
  public get items() {
    return this._items;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
