// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OdaOdaPrivateEndpointScanProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#id OdaOdaPrivateEndpointScanProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id OdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}
  */
  readonly odaPrivateEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#protocol OdaOdaPrivateEndpointScanProxy#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_type OdaOdaPrivateEndpointScanProxy#scan_listener_type}
  */
  readonly scanListenerType: string;
  /**
  * scan_listener_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_infos OdaOdaPrivateEndpointScanProxy#scan_listener_infos}
  */
  readonly scanListenerInfos: OdaOdaPrivateEndpointScanProxyScanListenerInfos[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#timeouts OdaOdaPrivateEndpointScanProxy#timeouts}
  */
  readonly timeouts?: OdaOdaPrivateEndpointScanProxyTimeouts;
}
export interface OdaOdaPrivateEndpointScanProxyScanListenerInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_fqdn OdaOdaPrivateEndpointScanProxy#scan_listener_fqdn}
  */
  readonly scanListenerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_ip OdaOdaPrivateEndpointScanProxy#scan_listener_ip}
  */
  readonly scanListenerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_port OdaOdaPrivateEndpointScanProxy#scan_listener_port}
  */
  readonly scanListenerPort?: number;
}

export function odaOdaPrivateEndpointScanProxyScanListenerInfosToTerraform(struct?: OdaOdaPrivateEndpointScanProxyScanListenerInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scan_listener_fqdn: cdktf.stringToTerraform(struct!.scanListenerFqdn),
    scan_listener_ip: cdktf.stringToTerraform(struct!.scanListenerIp),
    scan_listener_port: cdktf.numberToTerraform(struct!.scanListenerPort),
  }
}


export function odaOdaPrivateEndpointScanProxyScanListenerInfosToHclTerraform(struct?: OdaOdaPrivateEndpointScanProxyScanListenerInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scan_listener_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.scanListenerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_listener_ip: {
      value: cdktf.stringToHclTerraform(struct!.scanListenerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_listener_port: {
      value: cdktf.numberToHclTerraform(struct!.scanListenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdaOdaPrivateEndpointScanProxyScanListenerInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scanListenerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanListenerFqdn = this._scanListenerFqdn;
    }
    if (this._scanListenerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanListenerIp = this._scanListenerIp;
    }
    if (this._scanListenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanListenerPort = this._scanListenerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdaOdaPrivateEndpointScanProxyScanListenerInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scanListenerFqdn = undefined;
      this._scanListenerIp = undefined;
      this._scanListenerPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scanListenerFqdn = value.scanListenerFqdn;
      this._scanListenerIp = value.scanListenerIp;
      this._scanListenerPort = value.scanListenerPort;
    }
  }

  // scan_listener_fqdn - computed: true, optional: true, required: false
  private _scanListenerFqdn?: string; 
  public get scanListenerFqdn() {
    return this.getStringAttribute('scan_listener_fqdn');
  }
  public set scanListenerFqdn(value: string) {
    this._scanListenerFqdn = value;
  }
  public resetScanListenerFqdn() {
    this._scanListenerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerFqdnInput() {
    return this._scanListenerFqdn;
  }

  // scan_listener_ip - computed: true, optional: true, required: false
  private _scanListenerIp?: string; 
  public get scanListenerIp() {
    return this.getStringAttribute('scan_listener_ip');
  }
  public set scanListenerIp(value: string) {
    this._scanListenerIp = value;
  }
  public resetScanListenerIp() {
    this._scanListenerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerIpInput() {
    return this._scanListenerIp;
  }

  // scan_listener_port - computed: true, optional: true, required: false
  private _scanListenerPort?: number; 
  public get scanListenerPort() {
    return this.getNumberAttribute('scan_listener_port');
  }
  public set scanListenerPort(value: number) {
    this._scanListenerPort = value;
  }
  public resetScanListenerPort() {
    this._scanListenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerPortInput() {
    return this._scanListenerPort;
  }
}

export class OdaOdaPrivateEndpointScanProxyScanListenerInfosList extends cdktf.ComplexList {
  public internalValue? : OdaOdaPrivateEndpointScanProxyScanListenerInfos[] | cdktf.IResolvable

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
  public get(index: number): OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference {
    return new OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdaOdaPrivateEndpointScanProxyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#create OdaOdaPrivateEndpointScanProxy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#delete OdaOdaPrivateEndpointScanProxy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#update OdaOdaPrivateEndpointScanProxy#update}
  */
  readonly update?: string;
}

export function odaOdaPrivateEndpointScanProxyTimeoutsToTerraform(struct?: OdaOdaPrivateEndpointScanProxyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function odaOdaPrivateEndpointScanProxyTimeoutsToHclTerraform(struct?: OdaOdaPrivateEndpointScanProxyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdaOdaPrivateEndpointScanProxyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdaOdaPrivateEndpointScanProxyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy oci_oda_oda_private_endpoint_scan_proxy}
*/
export class OdaOdaPrivateEndpointScanProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_oda_oda_private_endpoint_scan_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OdaOdaPrivateEndpointScanProxy to import
  * @param importFromId The id of the existing OdaOdaPrivateEndpointScanProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OdaOdaPrivateEndpointScanProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_oda_oda_private_endpoint_scan_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/oda_oda_private_endpoint_scan_proxy oci_oda_oda_private_endpoint_scan_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OdaOdaPrivateEndpointScanProxyConfig
  */
  public constructor(scope: Construct, id: string, config: OdaOdaPrivateEndpointScanProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oda_oda_private_endpoint_scan_proxy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._odaPrivateEndpointId = config.odaPrivateEndpointId;
    this._protocol = config.protocol;
    this._scanListenerType = config.scanListenerType;
    this._scanListenerInfos.internalValue = config.scanListenerInfos;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // scan_listener_type - computed: false, optional: false, required: true
  private _scanListenerType?: string; 
  public get scanListenerType() {
    return this.getStringAttribute('scan_listener_type');
  }
  public set scanListenerType(value: string) {
    this._scanListenerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerTypeInput() {
    return this._scanListenerType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // scan_listener_infos - computed: false, optional: false, required: true
  private _scanListenerInfos = new OdaOdaPrivateEndpointScanProxyScanListenerInfosList(this, "scan_listener_infos", false);
  public get scanListenerInfos() {
    return this._scanListenerInfos;
  }
  public putScanListenerInfos(value: OdaOdaPrivateEndpointScanProxyScanListenerInfos[] | cdktf.IResolvable) {
    this._scanListenerInfos.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerInfosInput() {
    return this._scanListenerInfos.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OdaOdaPrivateEndpointScanProxyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oda_private_endpoint_id: cdktf.stringToTerraform(this._odaPrivateEndpointId),
      protocol: cdktf.stringToTerraform(this._protocol),
      scan_listener_type: cdktf.stringToTerraform(this._scanListenerType),
      scan_listener_infos: cdktf.listMapper(odaOdaPrivateEndpointScanProxyScanListenerInfosToTerraform, true)(this._scanListenerInfos.internalValue),
      timeouts: odaOdaPrivateEndpointScanProxyTimeoutsToTerraform(this._timeouts.internalValue),
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
      oda_private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._odaPrivateEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_listener_type: {
        value: cdktf.stringToHclTerraform(this._scanListenerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_listener_infos: {
        value: cdktf.listMapperHcl(odaOdaPrivateEndpointScanProxyScanListenerInfosToHclTerraform, true)(this._scanListenerInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdaOdaPrivateEndpointScanProxyScanListenerInfosList",
      },
      timeouts: {
        value: odaOdaPrivateEndpointScanProxyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OdaOdaPrivateEndpointScanProxyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
