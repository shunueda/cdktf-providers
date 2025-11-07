// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_webhooks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistSiteWebhooksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_webhooks#site_id DataMistSiteWebhooks#site_id}
  */
  readonly siteId: string;
}
export interface DataMistSiteWebhooksSiteWebhooks {
}

export function dataMistSiteWebhooksSiteWebhooksToTerraform(struct?: DataMistSiteWebhooksSiteWebhooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteWebhooksSiteWebhooksToHclTerraform(struct?: DataMistSiteWebhooksSiteWebhooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteWebhooksSiteWebhooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistSiteWebhooksSiteWebhooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteWebhooksSiteWebhooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth2_client_id - computed: true, optional: false, required: false
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }

  // oauth2_client_secret - computed: true, optional: false, required: false
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }

  // oauth2_grant_type - computed: true, optional: false, required: false
  public get oauth2GrantType() {
    return this.getStringAttribute('oauth2_grant_type');
  }

  // oauth2_password - computed: true, optional: false, required: false
  public get oauth2Password() {
    return this.getStringAttribute('oauth2_password');
  }

  // oauth2_scopes - computed: true, optional: false, required: false
  public get oauth2Scopes() {
    return this.getListAttribute('oauth2_scopes');
  }

  // oauth2_token_url - computed: true, optional: false, required: false
  public get oauth2TokenUrl() {
    return this.getStringAttribute('oauth2_token_url');
  }

  // oauth2_username - computed: true, optional: false, required: false
  public get oauth2Username() {
    return this.getStringAttribute('oauth2_username');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // single_event_per_message - computed: true, optional: false, required: false
  public get singleEventPerMessage() {
    return this.getBooleanAttribute('single_event_per_message');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // splunk_token - computed: true, optional: false, required: false
  public get splunkToken() {
    return this.getStringAttribute('splunk_token');
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return this.getListAttribute('topics');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // verify_cert - computed: true, optional: false, required: false
  public get verifyCert() {
    return this.getBooleanAttribute('verify_cert');
  }
}

export class DataMistSiteWebhooksSiteWebhooksList extends cdktf.ComplexList {

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
  public get(index: number): DataMistSiteWebhooksSiteWebhooksOutputReference {
    return new DataMistSiteWebhooksSiteWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_webhooks mist_site_webhooks}
*/
export class DataMistSiteWebhooks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_site_webhooks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistSiteWebhooks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistSiteWebhooks to import
  * @param importFromId The id of the existing DataMistSiteWebhooks that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_webhooks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistSiteWebhooks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_site_webhooks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_webhooks mist_site_webhooks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistSiteWebhooksConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistSiteWebhooksConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_site_webhooks',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_webhooks - computed: true, optional: false, required: false
  private _siteWebhooks = new DataMistSiteWebhooksSiteWebhooksList(this, "site_webhooks", true);
  public get siteWebhooks() {
    return this._siteWebhooks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
