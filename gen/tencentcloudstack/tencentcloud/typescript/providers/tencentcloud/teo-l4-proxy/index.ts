// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoL4ProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to enable network optimization in the Chinese mainland. The default value off is used if left empty. This configuration can only be enabled in certain acceleration zones and security protection configurations. For details, see [Creating an L4 Proxy Instance](https://intl.cloud.tencent.com/document/product/1552/90025?from_cn_redirect=1). Valid values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#accelerate_mainland TeoL4Proxy#accelerate_mainland}
  */
  readonly accelerateMainland?: string;
  /**
  * Acceleration zone of the Layer 4 proxy instance. `mainland`: Availability zone in the Chinese mainland; `overseas`: Global availability zone (excluding the Chinese mainland); `global`: Global availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#area TeoL4Proxy#area}
  */
  readonly area?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#id TeoL4Proxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies whether to enable IPv6 access. The default value off is used if left empty. This configuration can only be enabled in certain acceleration zones and security protection configurations. For details, see [Creating an L4 Proxy Instance](https://intl.cloud.tencent.com/document/product/1552/90025?from_cn_redirect=1). Valid values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#ipv6 TeoL4Proxy#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Layer 4 proxy instance name. You can enter 1-50 characters. Valid characters are a-z, 0-9, and hyphens (-). However, hyphens (-) cannot be used individually or consecutively and should not be placed at the beginning or end of the name. Modifications are not allowed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#proxy_name TeoL4Proxy#proxy_name}
  */
  readonly proxyName: string;
  /**
  * Specifies whether to enable the fixed IP address. The default value off is used if left empty. This configuration can only be enabled in certain acceleration zones and security protection configurations. For details, see [Creating an L4 Proxy Instance](https://intl.cloud.tencent.com/document/product/1552/90025?from_cn_redirect=1). Valid values: `on`: Enable; `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#static_ip TeoL4Proxy#static_ip}
  */
  readonly staticIp?: string;
  /**
  * Site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#zone_id TeoL4Proxy#zone_id}
  */
  readonly zoneId: string;
  /**
  * ddos_protection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#ddos_protection_config TeoL4Proxy#ddos_protection_config}
  */
  readonly ddosProtectionConfig?: TeoL4ProxyDdosProtectionConfig;
}
export interface TeoL4ProxyDdosProtectionConfig {
  /**
  * Exclusive DDoS protection specifications in the Chinese mainland. For details, see [Dedicated DDoS Mitigation Fee (Pay-as-You-Go)] (https://intl.cloud.tencent.com/document/product/1552/94162?from_cn_redirect=1). `PLATFORM`: Default protection of the platform, i.e., Exclusive DDoS protection is not enabled; `BASE30_MAX300`: Exclusive DDoS protection enabled, providing a baseline protection bandwidth of 30 Gbps and an elastic protection bandwidth of up to 300 Gbps; `BASE60_MAX600`: Exclusive DDoS protection enabled, providing a baseline protection bandwidth of 60 Gbps and an elastic protection bandwidth of up to 600 Gbps. If no parameters are filled, the default value PLATFORM is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#level_mainland TeoL4Proxy#level_mainland}
  */
  readonly levelMainland?: string;
  /**
  * Exclusive DDoS protection specifications in the worldwide region (excluding the Chinese mainland). `PLATFORM`: Default protection of the platform, i.e., Exclusive DDoS protection is not enabled; `ANYCAST300`: Exclusive DDoS protection enabled, offering a total maximum protection bandwidth of 300 Gbps; `ANYCAST_ALLIN`: Exclusive DDoS protection enabled, utilizing all available protection resources for protection. When no parameters are filled, the default value PLATFORM is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#level_overseas TeoL4Proxy#level_overseas}
  */
  readonly levelOverseas?: string;
  /**
  * Configuration of elastic protection bandwidth for exclusive DDoS protection in the Chinese mainland.Valid only when exclusive DDoS protection in the Chinese mainland is enabled (refer to the LevelMainland parameter configuration), and the value has the following limitations: When exclusive DDoS protection is enabled in the Chinese mainland and the 30 Gbps baseline protection bandwidth is used (the LevelMainland parameter value is BASE30_MAX300): the value range is 30 to 300 in Gbps; When exclusive DDoS protection is enabled in the Chinese mainland and the 60 Gbps baseline protection bandwidth is used (the LevelMainland parameter value is BASE60_MAX600): the value range is 60 to 600 in Gbps; When the default protection of the platform is used (the LevelMainland parameter value is PLATFORM): configuration is not supported, and the value of this parameter is invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#max_bandwidth_mainland TeoL4Proxy#max_bandwidth_mainland}
  */
  readonly maxBandwidthMainland?: number;
}

export function teoL4ProxyDdosProtectionConfigToTerraform(struct?: TeoL4ProxyDdosProtectionConfigOutputReference | TeoL4ProxyDdosProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_mainland: cdktf.stringToTerraform(struct!.levelMainland),
    level_overseas: cdktf.stringToTerraform(struct!.levelOverseas),
    max_bandwidth_mainland: cdktf.numberToTerraform(struct!.maxBandwidthMainland),
  }
}


export function teoL4ProxyDdosProtectionConfigToHclTerraform(struct?: TeoL4ProxyDdosProtectionConfigOutputReference | TeoL4ProxyDdosProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_mainland: {
      value: cdktf.stringToHclTerraform(struct!.levelMainland),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_overseas: {
      value: cdktf.stringToHclTerraform(struct!.levelOverseas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bandwidth_mainland: {
      value: cdktf.numberToHclTerraform(struct!.maxBandwidthMainland),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL4ProxyDdosProtectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL4ProxyDdosProtectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelMainland !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelMainland = this._levelMainland;
    }
    if (this._levelOverseas !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelOverseas = this._levelOverseas;
    }
    if (this._maxBandwidthMainland !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBandwidthMainland = this._maxBandwidthMainland;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL4ProxyDdosProtectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._levelMainland = undefined;
      this._levelOverseas = undefined;
      this._maxBandwidthMainland = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._levelMainland = value.levelMainland;
      this._levelOverseas = value.levelOverseas;
      this._maxBandwidthMainland = value.maxBandwidthMainland;
    }
  }

  // level_mainland - computed: false, optional: true, required: false
  private _levelMainland?: string; 
  public get levelMainland() {
    return this.getStringAttribute('level_mainland');
  }
  public set levelMainland(value: string) {
    this._levelMainland = value;
  }
  public resetLevelMainland() {
    this._levelMainland = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelMainlandInput() {
    return this._levelMainland;
  }

  // level_overseas - computed: false, optional: true, required: false
  private _levelOverseas?: string; 
  public get levelOverseas() {
    return this.getStringAttribute('level_overseas');
  }
  public set levelOverseas(value: string) {
    this._levelOverseas = value;
  }
  public resetLevelOverseas() {
    this._levelOverseas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelOverseasInput() {
    return this._levelOverseas;
  }

  // max_bandwidth_mainland - computed: false, optional: true, required: false
  private _maxBandwidthMainland?: number; 
  public get maxBandwidthMainland() {
    return this.getNumberAttribute('max_bandwidth_mainland');
  }
  public set maxBandwidthMainland(value: number) {
    this._maxBandwidthMainland = value;
  }
  public resetMaxBandwidthMainland() {
    this._maxBandwidthMainland = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBandwidthMainlandInput() {
    return this._maxBandwidthMainland;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy tencentcloud_teo_l4_proxy}
*/
export class TeoL4Proxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_l4_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoL4Proxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoL4Proxy to import
  * @param importFromId The id of the existing TeoL4Proxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoL4Proxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_l4_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_l4_proxy tencentcloud_teo_l4_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoL4ProxyConfig
  */
  public constructor(scope: Construct, id: string, config: TeoL4ProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_l4_proxy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accelerateMainland = config.accelerateMainland;
    this._area = config.area;
    this._id = config.id;
    this._ipv6 = config.ipv6;
    this._proxyName = config.proxyName;
    this._staticIp = config.staticIp;
    this._zoneId = config.zoneId;
    this._ddosProtectionConfig.internalValue = config.ddosProtectionConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerate_mainland - computed: false, optional: true, required: false
  private _accelerateMainland?: string; 
  public get accelerateMainland() {
    return this.getStringAttribute('accelerate_mainland');
  }
  public set accelerateMainland(value: string) {
    this._accelerateMainland = value;
  }
  public resetAccelerateMainland() {
    this._accelerateMainland = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerateMainlandInput() {
    return this._accelerateMainland;
  }

  // area - computed: false, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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

  // static_ip - computed: false, optional: true, required: false
  private _staticIp?: string; 
  public get staticIp() {
    return this.getStringAttribute('static_ip');
  }
  public set staticIp(value: string) {
    this._staticIp = value;
  }
  public resetStaticIp() {
    this._staticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp;
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

  // ddos_protection_config - computed: false, optional: true, required: false
  private _ddosProtectionConfig = new TeoL4ProxyDdosProtectionConfigOutputReference(this, "ddos_protection_config");
  public get ddosProtectionConfig() {
    return this._ddosProtectionConfig;
  }
  public putDdosProtectionConfig(value: TeoL4ProxyDdosProtectionConfig) {
    this._ddosProtectionConfig.internalValue = value;
  }
  public resetDdosProtectionConfig() {
    this._ddosProtectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionConfigInput() {
    return this._ddosProtectionConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerate_mainland: cdktf.stringToTerraform(this._accelerateMainland),
      area: cdktf.stringToTerraform(this._area),
      id: cdktf.stringToTerraform(this._id),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      proxy_name: cdktf.stringToTerraform(this._proxyName),
      static_ip: cdktf.stringToTerraform(this._staticIp),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      ddos_protection_config: teoL4ProxyDdosProtectionConfigToTerraform(this._ddosProtectionConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerate_mainland: {
        value: cdktf.stringToHclTerraform(this._accelerateMainland),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area: {
        value: cdktf.stringToHclTerraform(this._area),
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
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
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
      static_ip: {
        value: cdktf.stringToHclTerraform(this._staticIp),
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
      ddos_protection_config: {
        value: teoL4ProxyDdosProtectionConfigToHclTerraform(this._ddosProtectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoL4ProxyDdosProtectionConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
