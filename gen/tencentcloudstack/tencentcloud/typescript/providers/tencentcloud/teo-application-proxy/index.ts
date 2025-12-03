// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoApplicationProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * - `0`: Disable acceleration.- `1`: Enable acceleration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#accelerate_type TeoApplicationProxy#accelerate_type}
  */
  readonly accelerateType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#id TeoApplicationProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Scheduling mode.- `ip`: Anycast IP.- `domain`: CNAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#plat_type TeoApplicationProxy#plat_type}
  */
  readonly platType: string;
  /**
  * When `ProxyType` is hostname, `ProxyName` is the domain or subdomain name.When `ProxyType` is instance, `ProxyName` is the name of proxy application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#proxy_name TeoApplicationProxy#proxy_name}
  */
  readonly proxyName: string;
  /**
  * Layer 4 proxy mode. Valid values:- `hostname`: subdomain mode.- `instance`: instance mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#proxy_type TeoApplicationProxy#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * - `0`: Disable security protection.- `1`: Enable security protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#security_type TeoApplicationProxy#security_type}
  */
  readonly securityType: number;
  /**
  * Session persistence duration. Value range: 30-3600 (in seconds), default value is 600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#session_persist_time TeoApplicationProxy#session_persist_time}
  */
  readonly sessionPersistTime?: number;
  /**
  * Status of this application proxy. Valid values to set is `online` and `offline`.- `online`: Enable.- `offline`: Disable.- `progress`: Deploying.- `stopping`: Deactivating.- `fail`: Deploy or deactivate failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#status TeoApplicationProxy#status}
  */
  readonly status?: string;
  /**
  * Site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#zone_id TeoApplicationProxy#zone_id}
  */
  readonly zoneId: string;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#ipv6 TeoApplicationProxy#ipv6}
  */
  readonly ipv6?: TeoApplicationProxyIpv6;
}
export interface TeoApplicationProxyIpv6 {
  /**
  * - `on`: Enable.- `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#switch TeoApplicationProxy#switch}
  */
  readonly switch: string;
}

export function teoApplicationProxyIpv6ToTerraform(struct?: TeoApplicationProxyIpv6OutputReference | TeoApplicationProxyIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function teoApplicationProxyIpv6ToHclTerraform(struct?: TeoApplicationProxyIpv6OutputReference | TeoApplicationProxyIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoApplicationProxyIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoApplicationProxyIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoApplicationProxyIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy tencentcloud_teo_application_proxy}
*/
export class TeoApplicationProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_application_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoApplicationProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoApplicationProxy to import
  * @param importFromId The id of the existing TeoApplicationProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoApplicationProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_application_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/teo_application_proxy tencentcloud_teo_application_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoApplicationProxyConfig
  */
  public constructor(scope: Construct, id: string, config: TeoApplicationProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_application_proxy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accelerateType = config.accelerateType;
    this._id = config.id;
    this._platType = config.platType;
    this._proxyName = config.proxyName;
    this._proxyType = config.proxyType;
    this._securityType = config.securityType;
    this._sessionPersistTime = config.sessionPersistTime;
    this._status = config.status;
    this._zoneId = config.zoneId;
    this._ipv6.internalValue = config.ipv6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerate_type - computed: false, optional: false, required: true
  private _accelerateType?: number; 
  public get accelerateType() {
    return this.getNumberAttribute('accelerate_type');
  }
  public set accelerateType(value: number) {
    this._accelerateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerateTypeInput() {
    return this._accelerateType;
  }

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // ban_status - computed: true, optional: false, required: false
  public get banStatus() {
    return this.getStringAttribute('ban_status');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
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

  // plat_type - computed: false, optional: false, required: true
  private _platType?: string; 
  public get platType() {
    return this.getStringAttribute('plat_type');
  }
  public set platType(value: string) {
    this._platType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platTypeInput() {
    return this._platType;
  }

  // proxy_id - computed: true, optional: false, required: false
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }

  // proxy_name - computed: false, optional: false, required: true
  private _proxyName?: string; 
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }
  public set proxyName(value: string) {
    this._proxyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNameInput() {
    return this._proxyName;
  }

  // proxy_type - computed: true, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // schedule_value - computed: true, optional: false, required: false
  public get scheduleValue() {
    return cdktf.Fn.tolist(this.getListAttribute('schedule_value'));
  }

  // security_type - computed: false, optional: false, required: true
  private _securityType?: number; 
  public get securityType() {
    return this.getNumberAttribute('security_type');
  }
  public set securityType(value: number) {
    this._securityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTypeInput() {
    return this._securityType;
  }

  // session_persist_time - computed: true, optional: true, required: false
  private _sessionPersistTime?: number; 
  public get sessionPersistTime() {
    return this.getNumberAttribute('session_persist_time');
  }
  public set sessionPersistTime(value: number) {
    this._sessionPersistTime = value;
  }
  public resetSessionPersistTime() {
    this._sessionPersistTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistTimeInput() {
    return this._sessionPersistTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new TeoApplicationProxyIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: TeoApplicationProxyIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerate_type: cdktf.numberToTerraform(this._accelerateType),
      id: cdktf.stringToTerraform(this._id),
      plat_type: cdktf.stringToTerraform(this._platType),
      proxy_name: cdktf.stringToTerraform(this._proxyName),
      proxy_type: cdktf.stringToTerraform(this._proxyType),
      security_type: cdktf.numberToTerraform(this._securityType),
      session_persist_time: cdktf.numberToTerraform(this._sessionPersistTime),
      status: cdktf.stringToTerraform(this._status),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      ipv6: teoApplicationProxyIpv6ToTerraform(this._ipv6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerate_type: {
        value: cdktf.numberToHclTerraform(this._accelerateType),
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
      plat_type: {
        value: cdktf.stringToHclTerraform(this._platType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_name: {
        value: cdktf.stringToHclTerraform(this._proxyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_type: {
        value: cdktf.stringToHclTerraform(this._proxyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_type: {
        value: cdktf.numberToHclTerraform(this._securityType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_persist_time: {
        value: cdktf.numberToHclTerraform(this._sessionPersistTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: teoApplicationProxyIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoApplicationProxyIpv6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
