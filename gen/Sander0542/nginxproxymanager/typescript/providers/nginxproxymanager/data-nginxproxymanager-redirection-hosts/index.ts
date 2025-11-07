// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/redirection_hosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNginxproxymanagerRedirectionHostsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataNginxproxymanagerRedirectionHostsRedirectionHosts {
}

export function dataNginxproxymanagerRedirectionHostsRedirectionHostsToTerraform(struct?: DataNginxproxymanagerRedirectionHostsRedirectionHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNginxproxymanagerRedirectionHostsRedirectionHostsToHclTerraform(struct?: DataNginxproxymanagerRedirectionHostsRedirectionHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNginxproxymanagerRedirectionHostsRedirectionHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNginxproxymanagerRedirectionHostsRedirectionHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNginxproxymanagerRedirectionHostsRedirectionHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_config - computed: true, optional: false, required: false
  public get advancedConfig() {
    return this.getStringAttribute('advanced_config');
  }

  // block_exploits - computed: true, optional: false, required: false
  public get blockExploits() {
    return this.getBooleanAttribute('block_exploits');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // forward_domain_name - computed: true, optional: false, required: false
  public get forwardDomainName() {
    return this.getStringAttribute('forward_domain_name');
  }

  // forward_http_code - computed: true, optional: false, required: false
  public get forwardHttpCode() {
    return this.getNumberAttribute('forward_http_code');
  }

  // forward_scheme - computed: true, optional: false, required: false
  public get forwardScheme() {
    return this.getStringAttribute('forward_scheme');
  }

  // hsts_enabled - computed: true, optional: false, required: false
  public get hstsEnabled() {
    return this.getBooleanAttribute('hsts_enabled');
  }

  // hsts_subdomains - computed: true, optional: false, required: false
  public get hstsSubdomains() {
    return this.getBooleanAttribute('hsts_subdomains');
  }

  // http2_support - computed: true, optional: false, required: false
  public get http2Support() {
    return this.getBooleanAttribute('http2_support');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }

  // preserve_path - computed: true, optional: false, required: false
  public get preservePath() {
    return this.getBooleanAttribute('preserve_path');
  }

  // ssl_forced - computed: true, optional: false, required: false
  public get sslForced() {
    return this.getBooleanAttribute('ssl_forced');
  }
}

export class DataNginxproxymanagerRedirectionHostsRedirectionHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataNginxproxymanagerRedirectionHostsRedirectionHostsOutputReference {
    return new DataNginxproxymanagerRedirectionHostsRedirectionHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/redirection_hosts nginxproxymanager_redirection_hosts}
*/
export class DataNginxproxymanagerRedirectionHosts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_redirection_hosts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNginxproxymanagerRedirectionHosts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNginxproxymanagerRedirectionHosts to import
  * @param importFromId The id of the existing DataNginxproxymanagerRedirectionHosts that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/redirection_hosts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNginxproxymanagerRedirectionHosts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_redirection_hosts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/redirection_hosts nginxproxymanager_redirection_hosts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNginxproxymanagerRedirectionHostsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNginxproxymanagerRedirectionHostsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_redirection_hosts',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // redirection_hosts - computed: true, optional: false, required: false
  private _redirectionHosts = new DataNginxproxymanagerRedirectionHostsRedirectionHostsList(this, "redirection_hosts", true);
  public get redirectionHosts() {
    return this._redirectionHosts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
