// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/server_workloads
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitServerWorkloadsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfig {
}

export function dataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfigToTerraform(struct?: DataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfigToHclTerraform(struct?: DataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export interface DataAembitServerWorkloadsServerWorkloadsServiceEndpoint {
  /**
  * Service authentication details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/server_workloads#authentication_config DataAembitServerWorkloads#authentication_config}
  */
  readonly authenticationConfig?: DataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfig;
  /**
  * HTTP Headers are key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/server_workloads#http_headers DataAembitServerWorkloads#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
}

export function dataAembitServerWorkloadsServerWorkloadsServiceEndpointToTerraform(struct?: DataAembitServerWorkloadsServerWorkloadsServiceEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_config: dataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfigToTerraform(struct!.authenticationConfig),
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
  }
}


export function dataAembitServerWorkloadsServerWorkloadsServiceEndpointToHclTerraform(struct?: DataAembitServerWorkloadsServerWorkloadsServiceEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_config: {
      value: dataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfigToHclTerraform(struct!.authenticationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfig",
    },
    http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitServerWorkloadsServerWorkloadsServiceEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitServerWorkloadsServerWorkloadsServiceEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfig = this._authenticationConfig?.internalValue;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitServerWorkloadsServerWorkloadsServiceEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationConfig.internalValue = undefined;
      this._httpHeaders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationConfig.internalValue = value.authenticationConfig;
      this._httpHeaders = value.httpHeaders;
    }
  }

  // app_protocol - computed: true, optional: false, required: false
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }

  // authentication_config - computed: true, optional: true, required: false
  private _authenticationConfig = new DataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfigOutputReference(this, "authentication_config");
  public get authenticationConfig() {
    return this._authenticationConfig;
  }
  public putAuthenticationConfig(value: DataAembitServerWorkloadsServerWorkloadsServiceEndpointAuthenticationConfig) {
    this._authenticationConfig.internalValue = value;
  }
  public resetAuthenticationConfig() {
    this._authenticationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigInput() {
    return this._authenticationConfig.internalValue;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_headers - computed: true, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // requested_port - computed: true, optional: false, required: false
  public get requestedPort() {
    return this.getNumberAttribute('requested_port');
  }

  // requested_tls - computed: true, optional: false, required: false
  public get requestedTls() {
    return this.getBooleanAttribute('requested_tls');
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    return this.getBooleanAttribute('tls');
  }

  // tls_verification - computed: true, optional: false, required: false
  public get tlsVerification() {
    return this.getStringAttribute('tls_verification');
  }

  // transport_protocol - computed: true, optional: false, required: false
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
}
export interface DataAembitServerWorkloadsServerWorkloads {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/server_workloads#tags DataAembitServerWorkloads#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataAembitServerWorkloadsServerWorkloadsToTerraform(struct?: DataAembitServerWorkloadsServerWorkloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataAembitServerWorkloadsServerWorkloadsToHclTerraform(struct?: DataAembitServerWorkloadsServerWorkloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitServerWorkloadsServerWorkloadsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitServerWorkloadsServerWorkloads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitServerWorkloadsServerWorkloads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_endpoint - computed: true, optional: false, required: false
  private _serviceEndpoint = new DataAembitServerWorkloadsServerWorkloadsServiceEndpointOutputReference(this, "service_endpoint");
  public get serviceEndpoint() {
    return this._serviceEndpoint;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class DataAembitServerWorkloadsServerWorkloadsList extends cdktf.ComplexList {
  public internalValue? : DataAembitServerWorkloadsServerWorkloads[] | cdktf.IResolvable

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
  public get(index: number): DataAembitServerWorkloadsServerWorkloadsOutputReference {
    return new DataAembitServerWorkloadsServerWorkloadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/server_workloads aembit_server_workloads}
*/
export class DataAembitServerWorkloads extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_server_workloads";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitServerWorkloads resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitServerWorkloads to import
  * @param importFromId The id of the existing DataAembitServerWorkloads that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/server_workloads#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitServerWorkloads to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_server_workloads", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/server_workloads aembit_server_workloads} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitServerWorkloadsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitServerWorkloadsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_server_workloads',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
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

  // server_workloads - computed: true, optional: false, required: false
  private _serverWorkloads = new DataAembitServerWorkloadsServerWorkloadsList(this, "server_workloads", false);
  public get serverWorkloads() {
    return this._serverWorkloads;
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
