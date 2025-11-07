// https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/data-sources/sites
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSigsciSitesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter listed domains by either the site 'name' or 'display_name'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/data-sources/sites#filter DataSigsciSites#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/data-sources/sites#id DataSigsciSites#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataSigsciSitesSites {
}

export function dataSigsciSitesSitesToTerraform(struct?: DataSigsciSitesSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSigsciSitesSitesToHclTerraform(struct?: DataSigsciSitesSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSigsciSitesSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSigsciSitesSites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSigsciSitesSites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_anon_mode - computed: true, optional: false, required: false
  public get agentAnonMode() {
    return this.getStringAttribute('agent_anon_mode');
  }

  // agent_level - computed: true, optional: false, required: false
  public get agentLevel() {
    return this.getStringAttribute('agent_level');
  }

  // agents_uri - computed: true, optional: false, required: false
  public get agentsUri() {
    return this.getStringAttribute('agents_uri');
  }

  // alerts_uri - computed: true, optional: false, required: false
  public get alertsUri() {
    return this.getStringAttribute('alerts_uri');
  }

  // analytics_events_uri - computed: true, optional: false, required: false
  public get analyticsEventsUri() {
    return this.getStringAttribute('analytics_events_uri');
  }

  // blacklist_uri - computed: true, optional: false, required: false
  public get blacklistUri() {
    return this.getStringAttribute('blacklist_uri');
  }

  // block_duration_secs - computed: true, optional: false, required: false
  public get blockDurationSecs() {
    return this.getNumberAttribute('block_duration_secs');
  }

  // block_http_code - computed: true, optional: false, required: false
  public get blockHttpCode() {
    return this.getNumberAttribute('block_http_code');
  }

  // block_redirect_url - computed: true, optional: false, required: false
  public get blockRedirectUrl() {
    return this.getStringAttribute('block_redirect_url');
  }

  // client_ip_rules - computed: true, optional: false, required: false
  public get clientIpRules() {
    return cdktf.Fn.tolist(this.getListAttribute('client_ip_rules'));
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // events_uri - computed: true, optional: false, required: false
  public get eventsUri() {
    return this.getStringAttribute('events_uri');
  }

  // header_links_uri - computed: true, optional: false, required: false
  public get headerLinksUri() {
    return this.getStringAttribute('header_links_uri');
  }

  // integrations_uri - computed: true, optional: false, required: false
  public get integrationsUri() {
    return this.getStringAttribute('integrations_uri');
  }

  // members_uri - computed: true, optional: false, required: false
  public get membersUri() {
    return this.getStringAttribute('members_uri');
  }

  // monitors_uri - computed: true, optional: false, required: false
  public get monitorsUri() {
    return this.getStringAttribute('monitors_uri');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // redactions_uri - computed: true, optional: false, required: false
  public get redactionsUri() {
    return this.getStringAttribute('redactions_uri');
  }

  // requests_uri - computed: true, optional: false, required: false
  public get requestsUri() {
    return this.getStringAttribute('requests_uri');
  }

  // suspicious_ips_uri - computed: true, optional: false, required: false
  public get suspiciousIpsUri() {
    return this.getStringAttribute('suspicious_ips_uri');
  }

  // top_attacks_uri - computed: true, optional: false, required: false
  public get topAttacksUri() {
    return this.getStringAttribute('top_attacks_uri');
  }

  // whitelist_uri - computed: true, optional: false, required: false
  public get whitelistUri() {
    return this.getStringAttribute('whitelist_uri');
  }
}

export class DataSigsciSitesSitesList extends cdktf.ComplexList {

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
  public get(index: number): DataSigsciSitesSitesOutputReference {
    return new DataSigsciSitesSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/data-sources/sites sigsci_sites}
*/
export class DataSigsciSites extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sigsci_sites";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSigsciSites resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSigsciSites to import
  * @param importFromId The id of the existing DataSigsciSites that should be imported. Refer to the {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/data-sources/sites#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSigsciSites to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sigsci_sites", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/data-sources/sites sigsci_sites} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSigsciSitesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSigsciSitesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sigsci_sites',
      terraformGeneratorMetadata: {
        providerName: 'sigsci',
        providerVersion: '3.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // sites - computed: true, optional: false, required: false
  private _sites = new DataSigsciSitesSitesList(this, "sites", false);
  public get sites() {
    return this._sites;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
