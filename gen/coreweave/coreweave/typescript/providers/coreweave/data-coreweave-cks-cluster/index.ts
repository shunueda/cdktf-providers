// https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/cks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoreweaveCksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/cks_cluster#id DataCoreweaveCksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCoreweaveCksClusterAuthnWebhook {
}

export function dataCoreweaveCksClusterAuthnWebhookToTerraform(struct?: DataCoreweaveCksClusterAuthnWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoreweaveCksClusterAuthnWebhookToHclTerraform(struct?: DataCoreweaveCksClusterAuthnWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoreweaveCksClusterAuthnWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoreweaveCksClusterAuthnWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoreweaveCksClusterAuthnWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca - computed: true, optional: false, required: false
  public get ca() {
    return this.getStringAttribute('ca');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}
export interface DataCoreweaveCksClusterAuthzWebhook {
}

export function dataCoreweaveCksClusterAuthzWebhookToTerraform(struct?: DataCoreweaveCksClusterAuthzWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoreweaveCksClusterAuthzWebhookToHclTerraform(struct?: DataCoreweaveCksClusterAuthzWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoreweaveCksClusterAuthzWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoreweaveCksClusterAuthzWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoreweaveCksClusterAuthzWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca - computed: true, optional: false, required: false
  public get ca() {
    return this.getStringAttribute('ca');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}
export interface DataCoreweaveCksClusterNodePortRange {
}

export function dataCoreweaveCksClusterNodePortRangeToTerraform(struct?: DataCoreweaveCksClusterNodePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoreweaveCksClusterNodePortRangeToHclTerraform(struct?: DataCoreweaveCksClusterNodePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoreweaveCksClusterNodePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoreweaveCksClusterNodePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoreweaveCksClusterNodePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getNumberAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getNumberAttribute('start');
  }
}
export interface DataCoreweaveCksClusterOidc {
}

export function dataCoreweaveCksClusterOidcToTerraform(struct?: DataCoreweaveCksClusterOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoreweaveCksClusterOidcToHclTerraform(struct?: DataCoreweaveCksClusterOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoreweaveCksClusterOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoreweaveCksClusterOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoreweaveCksClusterOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // issuer_url - computed: true, optional: false, required: false
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/cks_cluster coreweave_cks_cluster}
*/
export class DataCoreweaveCksCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coreweave_cks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoreweaveCksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoreweaveCksCluster to import
  * @param importFromId The id of the existing DataCoreweaveCksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/cks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoreweaveCksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coreweave_cks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/data-sources/cks_cluster coreweave_cks_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoreweaveCksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataCoreweaveCksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'coreweave_cks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'coreweave',
        providerVersion: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_server_endpoint - computed: true, optional: false, required: false
  public get apiServerEndpoint() {
    return this.getStringAttribute('api_server_endpoint');
  }

  // audit_policy - computed: true, optional: false, required: false
  public get auditPolicy() {
    return this.getStringAttribute('audit_policy');
  }

  // authn_webhook - computed: true, optional: false, required: false
  private _authnWebhook = new DataCoreweaveCksClusterAuthnWebhookOutputReference(this, "authn_webhook");
  public get authnWebhook() {
    return this._authnWebhook;
  }

  // authz_webhook - computed: true, optional: false, required: false
  private _authzWebhook = new DataCoreweaveCksClusterAuthzWebhookOutputReference(this, "authz_webhook");
  public get authzWebhook() {
    return this._authzWebhook;
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

  // internal_lb_cidr_names - computed: true, optional: false, required: false
  public get internalLbCidrNames() {
    return cdktf.Fn.tolist(this.getListAttribute('internal_lb_cidr_names'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_port_range - computed: true, optional: false, required: false
  private _nodePortRange = new DataCoreweaveCksClusterNodePortRangeOutputReference(this, "node_port_range");
  public get nodePortRange() {
    return this._nodePortRange;
  }

  // oidc - computed: true, optional: false, required: false
  private _oidc = new DataCoreweaveCksClusterOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }

  // pod_cidr_name - computed: true, optional: false, required: false
  public get podCidrName() {
    return this.getStringAttribute('pod_cidr_name');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getBooleanAttribute('public');
  }

  // service_account_oidc_issuer_url - computed: true, optional: false, required: false
  public get serviceAccountOidcIssuerUrl() {
    return this.getStringAttribute('service_account_oidc_issuer_url');
  }

  // service_cidr_name - computed: true, optional: false, required: false
  public get serviceCidrName() {
    return this.getStringAttribute('service_cidr_name');
  }

  // shared_storage_cluster_id - computed: true, optional: false, required: false
  public get sharedStorageClusterId() {
    return this.getStringAttribute('shared_storage_cluster_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
