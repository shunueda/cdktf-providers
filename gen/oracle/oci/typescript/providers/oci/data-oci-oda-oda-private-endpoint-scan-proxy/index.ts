// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOdaOdaPrivateEndpointScanProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}
  */
  readonly odaPrivateEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_scan_proxy_id DataOciOdaOdaPrivateEndpointScanProxy#oda_private_endpoint_scan_proxy_id}
  */
  readonly odaPrivateEndpointScanProxyId: string;
}
export interface DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos {
}

export function dataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosToTerraform(struct?: DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosToHclTerraform(struct?: DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scan_listener_fqdn - computed: true, optional: false, required: false
  public get scanListenerFqdn() {
    return this.getStringAttribute('scan_listener_fqdn');
  }

  // scan_listener_ip - computed: true, optional: false, required: false
  public get scanListenerIp() {
    return this.getStringAttribute('scan_listener_ip');
  }

  // scan_listener_port - computed: true, optional: false, required: false
  public get scanListenerPort() {
    return this.getNumberAttribute('scan_listener_port');
  }
}

export class DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference {
    return new DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy oci_oda_oda_private_endpoint_scan_proxy}
*/
export class DataOciOdaOdaPrivateEndpointScanProxy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_oda_oda_private_endpoint_scan_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOdaOdaPrivateEndpointScanProxy to import
  * @param importFromId The id of the existing DataOciOdaOdaPrivateEndpointScanProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOdaOdaPrivateEndpointScanProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_oda_oda_private_endpoint_scan_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/oda_oda_private_endpoint_scan_proxy oci_oda_oda_private_endpoint_scan_proxy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOdaOdaPrivateEndpointScanProxyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOdaOdaPrivateEndpointScanProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oda_oda_private_endpoint_scan_proxy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._odaPrivateEndpointId = config.odaPrivateEndpointId;
    this._odaPrivateEndpointScanProxyId = config.odaPrivateEndpointScanProxyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // oda_private_endpoint_id - computed: false, optional: false, required: true
  private _odaPrivateEndpointId?: string; 
  public get odaPrivateEndpointId() {
    return this.getStringAttribute('oda_private_endpoint_id');
  }
  public set odaPrivateEndpointId(value: string) {
    this._odaPrivateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odaPrivateEndpointIdInput() {
    return this._odaPrivateEndpointId;
  }

  // oda_private_endpoint_scan_proxy_id - computed: false, optional: false, required: true
  private _odaPrivateEndpointScanProxyId?: string; 
  public get odaPrivateEndpointScanProxyId() {
    return this.getStringAttribute('oda_private_endpoint_scan_proxy_id');
  }
  public set odaPrivateEndpointScanProxyId(value: string) {
    this._odaPrivateEndpointScanProxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odaPrivateEndpointScanProxyIdInput() {
    return this._odaPrivateEndpointScanProxyId;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // scan_listener_infos - computed: true, optional: false, required: false
  private _scanListenerInfos = new DataOciOdaOdaPrivateEndpointScanProxyScanListenerInfosList(this, "scan_listener_infos", false);
  public get scanListenerInfos() {
    return this._scanListenerInfos;
  }

  // scan_listener_type - computed: true, optional: false, required: false
  public get scanListenerType() {
    return this.getStringAttribute('scan_listener_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      oda_private_endpoint_id: cdktf.stringToTerraform(this._odaPrivateEndpointId),
      oda_private_endpoint_scan_proxy_id: cdktf.stringToTerraform(this._odaPrivateEndpointScanProxyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oda_private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._odaPrivateEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oda_private_endpoint_scan_proxy_id: {
        value: cdktf.stringToHclTerraform(this._odaPrivateEndpointScanProxyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
