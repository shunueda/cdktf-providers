// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZgaAcceleratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of accelerator. The max length of accelerator name is 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#accelerator_name ZgaAccelerator#accelerator_name}
  */
  readonly acceleratorName?: string;
  /**
  * Backup endpoint of the origin. Backup orgin only be configured when origin configured with IP. Only one back endpoint is allowed to be configured, when the back endpoint is CNAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#backup_origin ZgaAccelerator#backup_origin}
  */
  readonly backupOrigin?: string[];
  /**
  * The certificate of the accelerator. Required when exist https protocol accelerate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#certificate_id ZgaAccelerator#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * The charge type of the accelerator. The default charge type of the account will be used. Modification is not supported. Valid values are `ByTrafficPackage`, `ByBandwidth95`, `ByBandwidth`, `ByTraffic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#charge_type ZgaAccelerator#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Main domain of the accelerator. Required when L7 http or https accelerate, globally unique and no duplication is allowed. Supports generic domain names, like: *.zenlayer.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#domain ZgaAccelerator#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#id ZgaAccelerator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Endpoints of the origin. Only one endpoint is allowed to be configured, when the endpoint is CNAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#origin ZgaAccelerator#origin}
  */
  readonly origin: string[];
  /**
  * ID of the orgin region. Modification is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#origin_region_id ZgaAccelerator#origin_region_id}
  */
  readonly originRegionId: string;
  /**
  * Relate domains of the accelerator. Globally unique and no duplication is allowed. The max length of relate domains is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#relate_domains ZgaAccelerator#relate_domains}
  */
  readonly relateDomains?: string[];
  /**
  * The resource group id the accelerator belongs to, default to Default Resource Group. Modification is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#resource_group_id ZgaAccelerator#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * accelerate_regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#accelerate_regions ZgaAccelerator#accelerate_regions}
  */
  readonly accelerateRegions: ZgaAcceleratorAccelerateRegions[] | cdktf.IResolvable;
  /**
  * access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#access_control ZgaAccelerator#access_control}
  */
  readonly accessControl?: ZgaAcceleratorAccessControl;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#health_check ZgaAccelerator#health_check}
  */
  readonly healthCheck?: ZgaAcceleratorHealthCheck;
  /**
  * l4_listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#l4_listeners ZgaAccelerator#l4_listeners}
  */
  readonly l4Listeners?: ZgaAcceleratorL4Listeners[] | cdktf.IResolvable;
  /**
  * l7_listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#l7_listeners ZgaAccelerator#l7_listeners}
  */
  readonly l7Listeners?: ZgaAcceleratorL7Listeners[] | cdktf.IResolvable;
  /**
  * protocol_opts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#protocol_opts ZgaAccelerator#protocol_opts}
  */
  readonly protocolOpts?: ZgaAcceleratorProtocolOpts;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#timeouts ZgaAccelerator#timeouts}
  */
  readonly timeouts?: ZgaAcceleratorTimeouts;
}
export interface ZgaAcceleratorAccelerateRegions {
  /**
  * ID of the accelerate region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#accelerate_region_id ZgaAccelerator#accelerate_region_id}
  */
  readonly accelerateRegionId: string;
  /**
  * Bandwidth limit of the accelerate region. Exceeding the account speed limit is not allowed. Unit: Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#bandwidth ZgaAccelerator#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Virtual IP the accelerate region. Modification is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#vip ZgaAccelerator#vip}
  */
  readonly vip?: string;
}

export function zgaAcceleratorAccelerateRegionsToTerraform(struct?: ZgaAcceleratorAccelerateRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerate_region_id: cdktf.stringToTerraform(struct!.accelerateRegionId),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    vip: cdktf.stringToTerraform(struct!.vip),
  }
}


export function zgaAcceleratorAccelerateRegionsToHclTerraform(struct?: ZgaAcceleratorAccelerateRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerate_region_id: {
      value: cdktf.stringToHclTerraform(struct!.accelerateRegionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZgaAcceleratorAccelerateRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZgaAcceleratorAccelerateRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accelerateRegionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerateRegionId = this._accelerateRegionId;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZgaAcceleratorAccelerateRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accelerateRegionId = undefined;
      this._bandwidth = undefined;
      this._vip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accelerateRegionId = value.accelerateRegionId;
      this._bandwidth = value.bandwidth;
      this._vip = value.vip;
    }
  }

  // accelerate_region_id - computed: false, optional: false, required: true
  private _accelerateRegionId?: string; 
  public get accelerateRegionId() {
    return this.getStringAttribute('accelerate_region_id');
  }
  public set accelerateRegionId(value: string) {
    this._accelerateRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerateRegionIdInput() {
    return this._accelerateRegionId;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // vip - computed: true, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }
}

export class ZgaAcceleratorAccelerateRegionsList extends cdktf.ComplexList {
  public internalValue? : ZgaAcceleratorAccelerateRegions[] | cdktf.IResolvable

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
  public get(index: number): ZgaAcceleratorAccelerateRegionsOutputReference {
    return new ZgaAcceleratorAccelerateRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZgaAcceleratorAccessControlRules {
  /**
  * The cidr ip of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#cidr_ip ZgaAccelerator#cidr_ip}
  */
  readonly cidrIp: string[];
  /**
  * The directory of the rule. Not configurable with L4 listener. Default is `/`. Wildcards supported: *.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#directory ZgaAccelerator#directory}
  */
  readonly directory?: string;
  /**
  * The listener of the rule. Valid values are `$protocol:$port`, `$protocol:$portRange`, `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#listener ZgaAccelerator#listener}
  */
  readonly listener: string;
  /**
  * The note of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#note ZgaAccelerator#note}
  */
  readonly note?: string;
  /**
  * The policy of the rule. Valid values are `accept`, `deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#policy ZgaAccelerator#policy}
  */
  readonly policy: string;
}

export function zgaAcceleratorAccessControlRulesToTerraform(struct?: ZgaAcceleratorAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrIp),
    directory: cdktf.stringToTerraform(struct!.directory),
    listener: cdktf.stringToTerraform(struct!.listener),
    note: cdktf.stringToTerraform(struct!.note),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function zgaAcceleratorAccessControlRulesToHclTerraform(struct?: ZgaAcceleratorAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrIp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener: {
      value: cdktf.stringToHclTerraform(struct!.listener),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    note: {
      value: cdktf.stringToHclTerraform(struct!.note),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZgaAcceleratorAccessControlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZgaAcceleratorAccessControlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._listener !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener;
    }
    if (this._note !== undefined) {
      hasAnyValues = true;
      internalValueResult.note = this._note;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZgaAcceleratorAccessControlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._directory = undefined;
      this._listener = undefined;
      this._note = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._directory = value.directory;
      this._listener = value.listener;
      this._note = value.note;
      this._policy = value.policy;
    }
  }

  // cidr_ip - computed: false, optional: false, required: true
  private _cidrIp?: string[]; 
  public get cidrIp() {
    return cdktf.Fn.tolist(this.getListAttribute('cidr_ip'));
  }
  public set cidrIp(value: string[]) {
    this._cidrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // listener - computed: false, optional: false, required: true
  private _listener?: string; 
  public get listener() {
    return this.getStringAttribute('listener');
  }
  public set listener(value: string) {
    this._listener = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener;
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}

export class ZgaAcceleratorAccessControlRulesList extends cdktf.ComplexList {
  public internalValue? : ZgaAcceleratorAccessControlRules[] | cdktf.IResolvable

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
  public get(index: number): ZgaAcceleratorAccessControlRulesOutputReference {
    return new ZgaAcceleratorAccessControlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZgaAcceleratorAccessControl {
  /**
  * Whether to enable access control. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#enable ZgaAccelerator#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#rules ZgaAccelerator#rules}
  */
  readonly rules?: ZgaAcceleratorAccessControlRules[] | cdktf.IResolvable;
}

export function zgaAcceleratorAccessControlToTerraform(struct?: ZgaAcceleratorAccessControlOutputReference | ZgaAcceleratorAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    rules: cdktf.listMapper(zgaAcceleratorAccessControlRulesToTerraform, true)(struct!.rules),
  }
}


export function zgaAcceleratorAccessControlToHclTerraform(struct?: ZgaAcceleratorAccessControlOutputReference | ZgaAcceleratorAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(zgaAcceleratorAccessControlRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "ZgaAcceleratorAccessControlRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZgaAcceleratorAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZgaAcceleratorAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZgaAcceleratorAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._rules.internalValue = value.rules;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ZgaAcceleratorAccessControlRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ZgaAcceleratorAccessControlRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface ZgaAcceleratorHealthCheck {
  /**
  * Whether to enable alarm. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#alarm ZgaAccelerator#alarm}
  */
  readonly alarm?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable health check. If the enable is `false`, the alarm will be set to `false` and the port will be cleared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#enable ZgaAccelerator#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * The port of health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#port ZgaAccelerator#port}
  */
  readonly port?: number;
}

export function zgaAcceleratorHealthCheckToTerraform(struct?: ZgaAcceleratorHealthCheckOutputReference | ZgaAcceleratorHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm: cdktf.booleanToTerraform(struct!.alarm),
    enable: cdktf.booleanToTerraform(struct!.enable),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function zgaAcceleratorHealthCheckToHclTerraform(struct?: ZgaAcceleratorHealthCheckOutputReference | ZgaAcceleratorHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm: {
      value: cdktf.booleanToHclTerraform(struct!.alarm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZgaAcceleratorHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZgaAcceleratorHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarm = this._alarm;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZgaAcceleratorHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarm = undefined;
      this._enable = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarm = value.alarm;
      this._enable = value.enable;
      this._port = value.port;
    }
  }

  // alarm - computed: false, optional: true, required: false
  private _alarm?: boolean | cdktf.IResolvable; 
  public get alarm() {
    return this.getBooleanAttribute('alarm');
  }
  public set alarm(value: boolean | cdktf.IResolvable) {
    this._alarm = value;
  }
  public resetAlarm() {
    this._alarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmInput() {
    return this._alarm;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ZgaAcceleratorL4Listeners {
  /**
  * The Return-to-origin port of the l4 listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#back_port ZgaAccelerator#back_port}
  */
  readonly backPort?: number;
  /**
  * The Return-to-origin port range of the l4 listener. Use a slash (/) to separate the starting and ending ports, like: 1/200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#back_port_range ZgaAccelerator#back_port_range}
  */
  readonly backPortRange?: string;
  /**
  * The port of the l4 listener. Only port or portRange can be configured, and duplicate ports are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#port ZgaAccelerator#port}
  */
  readonly port?: number;
  /**
  * The port range of the l4 listener. Only port or portRange can be configured. Use a slash (/) to separate the starting and ending ports, like: 1/200. The max range: 300.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#port_range ZgaAccelerator#port_range}
  */
  readonly portRange?: string;
  /**
  * The protocol of the l4 listener. Valid values: `tcp`, `udp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#protocol ZgaAccelerator#protocol}
  */
  readonly protocol: string;
}

export function zgaAcceleratorL4ListenersToTerraform(struct?: ZgaAcceleratorL4Listeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    back_port: cdktf.numberToTerraform(struct!.backPort),
    back_port_range: cdktf.stringToTerraform(struct!.backPortRange),
    port: cdktf.numberToTerraform(struct!.port),
    port_range: cdktf.stringToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function zgaAcceleratorL4ListenersToHclTerraform(struct?: ZgaAcceleratorL4Listeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    back_port: {
      value: cdktf.numberToHclTerraform(struct!.backPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    back_port_range: {
      value: cdktf.stringToHclTerraform(struct!.backPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZgaAcceleratorL4ListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZgaAcceleratorL4Listeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backPort = this._backPort;
    }
    if (this._backPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.backPortRange = this._backPortRange;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZgaAcceleratorL4Listeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backPort = undefined;
      this._backPortRange = undefined;
      this._port = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backPort = value.backPort;
      this._backPortRange = value.backPortRange;
      this._port = value.port;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
    }
  }

  // back_port - computed: false, optional: true, required: false
  private _backPort?: number; 
  public get backPort() {
    return this.getNumberAttribute('back_port');
  }
  public set backPort(value: number) {
    this._backPort = value;
  }
  public resetBackPort() {
    this._backPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backPortInput() {
    return this._backPort;
  }

  // back_port_range - computed: false, optional: true, required: false
  private _backPortRange?: string; 
  public get backPortRange() {
    return this.getStringAttribute('back_port_range');
  }
  public set backPortRange(value: string) {
    this._backPortRange = value;
  }
  public resetBackPortRange() {
    this._backPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backPortRangeInput() {
    return this._backPortRange;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
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
}

export class ZgaAcceleratorL4ListenersList extends cdktf.ComplexList {
  public internalValue? : ZgaAcceleratorL4Listeners[] | cdktf.IResolvable

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
  public get(index: number): ZgaAcceleratorL4ListenersOutputReference {
    return new ZgaAcceleratorL4ListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZgaAcceleratorL7Listeners {
  /**
  * The Return-to-origin port of the l7 listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#back_port ZgaAccelerator#back_port}
  */
  readonly backPort?: number;
  /**
  * The Return-to-origin port range of the l7 listener. Use a slash (/) to separate the starting and ending ports, like: 1/200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#back_port_range ZgaAccelerator#back_port_range}
  */
  readonly backPortRange?: string;
  /**
  * The Return-to-origin protocol of the l7 listener. Valid values: http and https. The default is equal to protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#back_protocol ZgaAccelerator#back_protocol}
  */
  readonly backProtocol: string;
  /**
  * The Return-to-origin host of the l7 listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#host ZgaAccelerator#host}
  */
  readonly host?: string;
  /**
  * The port of the l7 listener. Only port or portRange can be configured, and duplicate ports are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#port ZgaAccelerator#port}
  */
  readonly port?: number;
  /**
  * The port range of the l7 listener. Only port or portRange can be configured. Use a slash (/) to separate the starting and ending ports, like: 1/200. The max range: 300.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#port_range ZgaAccelerator#port_range}
  */
  readonly portRange?: string;
  /**
  * The protocol of the l4 listener. Valid values: `http`, `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#protocol ZgaAccelerator#protocol}
  */
  readonly protocol: string;
}

export function zgaAcceleratorL7ListenersToTerraform(struct?: ZgaAcceleratorL7Listeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    back_port: cdktf.numberToTerraform(struct!.backPort),
    back_port_range: cdktf.stringToTerraform(struct!.backPortRange),
    back_protocol: cdktf.stringToTerraform(struct!.backProtocol),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    port_range: cdktf.stringToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function zgaAcceleratorL7ListenersToHclTerraform(struct?: ZgaAcceleratorL7Listeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    back_port: {
      value: cdktf.numberToHclTerraform(struct!.backPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    back_port_range: {
      value: cdktf.stringToHclTerraform(struct!.backPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    back_protocol: {
      value: cdktf.stringToHclTerraform(struct!.backProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZgaAcceleratorL7ListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZgaAcceleratorL7Listeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backPort = this._backPort;
    }
    if (this._backPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.backPortRange = this._backPortRange;
    }
    if (this._backProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.backProtocol = this._backProtocol;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZgaAcceleratorL7Listeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backPort = undefined;
      this._backPortRange = undefined;
      this._backProtocol = undefined;
      this._host = undefined;
      this._port = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backPort = value.backPort;
      this._backPortRange = value.backPortRange;
      this._backProtocol = value.backProtocol;
      this._host = value.host;
      this._port = value.port;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
    }
  }

  // back_port - computed: false, optional: true, required: false
  private _backPort?: number; 
  public get backPort() {
    return this.getNumberAttribute('back_port');
  }
  public set backPort(value: number) {
    this._backPort = value;
  }
  public resetBackPort() {
    this._backPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backPortInput() {
    return this._backPort;
  }

  // back_port_range - computed: false, optional: true, required: false
  private _backPortRange?: string; 
  public get backPortRange() {
    return this.getStringAttribute('back_port_range');
  }
  public set backPortRange(value: string) {
    this._backPortRange = value;
  }
  public resetBackPortRange() {
    this._backPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backPortRangeInput() {
    return this._backPortRange;
  }

  // back_protocol - computed: false, optional: false, required: true
  private _backProtocol?: string; 
  public get backProtocol() {
    return this.getStringAttribute('back_protocol');
  }
  public set backProtocol(value: string) {
    this._backProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backProtocolInput() {
    return this._backProtocol;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
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
}

export class ZgaAcceleratorL7ListenersList extends cdktf.ComplexList {
  public internalValue? : ZgaAcceleratorL7Listeners[] | cdktf.IResolvable

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
  public get(index: number): ZgaAcceleratorL7ListenersOutputReference {
    return new ZgaAcceleratorL7ListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZgaAcceleratorProtocolOpts {
  /**
  * Whether to enable gzip. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#gzip ZgaAccelerator#gzip}
  */
  readonly gzip?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable proxyProtocol. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#proxy_protocol ZgaAccelerator#proxy_protocol}
  */
  readonly proxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable TOA. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#toa ZgaAccelerator#toa}
  */
  readonly toa?: boolean | cdktf.IResolvable;
  /**
  * TOA verison. Default is `253`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#toa_value ZgaAccelerator#toa_value}
  */
  readonly toaValue?: number;
  /**
  * Whether to enable websocket. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#websocket ZgaAccelerator#websocket}
  */
  readonly websocket?: boolean | cdktf.IResolvable;
}

export function zgaAcceleratorProtocolOptsToTerraform(struct?: ZgaAcceleratorProtocolOptsOutputReference | ZgaAcceleratorProtocolOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gzip: cdktf.booleanToTerraform(struct!.gzip),
    proxy_protocol: cdktf.booleanToTerraform(struct!.proxyProtocol),
    toa: cdktf.booleanToTerraform(struct!.toa),
    toa_value: cdktf.numberToTerraform(struct!.toaValue),
    websocket: cdktf.booleanToTerraform(struct!.websocket),
  }
}


export function zgaAcceleratorProtocolOptsToHclTerraform(struct?: ZgaAcceleratorProtocolOptsOutputReference | ZgaAcceleratorProtocolOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gzip: {
      value: cdktf.booleanToHclTerraform(struct!.gzip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.proxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    toa: {
      value: cdktf.booleanToHclTerraform(struct!.toa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    toa_value: {
      value: cdktf.numberToHclTerraform(struct!.toaValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    websocket: {
      value: cdktf.booleanToHclTerraform(struct!.websocket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZgaAcceleratorProtocolOptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZgaAcceleratorProtocolOpts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzip = this._gzip;
    }
    if (this._proxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocol = this._proxyProtocol;
    }
    if (this._toa !== undefined) {
      hasAnyValues = true;
      internalValueResult.toa = this._toa;
    }
    if (this._toaValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toaValue = this._toaValue;
    }
    if (this._websocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocket = this._websocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZgaAcceleratorProtocolOpts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gzip = undefined;
      this._proxyProtocol = undefined;
      this._toa = undefined;
      this._toaValue = undefined;
      this._websocket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gzip = value.gzip;
      this._proxyProtocol = value.proxyProtocol;
      this._toa = value.toa;
      this._toaValue = value.toaValue;
      this._websocket = value.websocket;
    }
  }

  // gzip - computed: false, optional: true, required: false
  private _gzip?: boolean | cdktf.IResolvable; 
  public get gzip() {
    return this.getBooleanAttribute('gzip');
  }
  public set gzip(value: boolean | cdktf.IResolvable) {
    this._gzip = value;
  }
  public resetGzip() {
    this._gzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipInput() {
    return this._gzip;
  }

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol?: boolean | cdktf.IResolvable; 
  public get proxyProtocol() {
    return this.getBooleanAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: boolean | cdktf.IResolvable) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol;
  }

  // toa - computed: false, optional: true, required: false
  private _toa?: boolean | cdktf.IResolvable; 
  public get toa() {
    return this.getBooleanAttribute('toa');
  }
  public set toa(value: boolean | cdktf.IResolvable) {
    this._toa = value;
  }
  public resetToa() {
    this._toa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toaInput() {
    return this._toa;
  }

  // toa_value - computed: false, optional: true, required: false
  private _toaValue?: number; 
  public get toaValue() {
    return this.getNumberAttribute('toa_value');
  }
  public set toaValue(value: number) {
    this._toaValue = value;
  }
  public resetToaValue() {
    this._toaValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toaValueInput() {
    return this._toaValue;
  }

  // websocket - computed: false, optional: true, required: false
  private _websocket?: boolean | cdktf.IResolvable; 
  public get websocket() {
    return this.getBooleanAttribute('websocket');
  }
  public set websocket(value: boolean | cdktf.IResolvable) {
    this._websocket = value;
  }
  public resetWebsocket() {
    this._websocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketInput() {
    return this._websocket;
  }
}
export interface ZgaAcceleratorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#create ZgaAccelerator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#update ZgaAccelerator#update}
  */
  readonly update?: string;
}

export function zgaAcceleratorTimeoutsToTerraform(struct?: ZgaAcceleratorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function zgaAcceleratorTimeoutsToHclTerraform(struct?: ZgaAcceleratorTimeouts | cdktf.IResolvable): any {
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

export class ZgaAcceleratorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZgaAcceleratorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZgaAcceleratorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator zenlayercloud_zga_accelerator}
*/
export class ZgaAccelerator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zga_accelerator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZgaAccelerator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZgaAccelerator to import
  * @param importFromId The id of the existing ZgaAccelerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZgaAccelerator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zga_accelerator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs/resources/zga_accelerator zenlayercloud_zga_accelerator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZgaAcceleratorConfig
  */
  public constructor(scope: Construct, id: string, config: ZgaAcceleratorConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zga_accelerator',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.8',
        providerVersionConstraint: '0.2.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceleratorName = config.acceleratorName;
    this._backupOrigin = config.backupOrigin;
    this._certificateId = config.certificateId;
    this._chargeType = config.chargeType;
    this._domain = config.domain;
    this._id = config.id;
    this._origin = config.origin;
    this._originRegionId = config.originRegionId;
    this._relateDomains = config.relateDomains;
    this._resourceGroupId = config.resourceGroupId;
    this._accelerateRegions.internalValue = config.accelerateRegions;
    this._accessControl.internalValue = config.accessControl;
    this._healthCheck.internalValue = config.healthCheck;
    this._l4Listeners.internalValue = config.l4Listeners;
    this._l7Listeners.internalValue = config.l7Listeners;
    this._protocolOpts.internalValue = config.protocolOpts;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_name - computed: true, optional: true, required: false
  private _acceleratorName?: string; 
  public get acceleratorName() {
    return this.getStringAttribute('accelerator_name');
  }
  public set acceleratorName(value: string) {
    this._acceleratorName = value;
  }
  public resetAcceleratorName() {
    this._acceleratorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorNameInput() {
    return this._acceleratorName;
  }

  // accelerator_status - computed: true, optional: false, required: false
  public get acceleratorStatus() {
    return this.getStringAttribute('accelerator_status');
  }

  // backup_origin - computed: false, optional: true, required: false
  private _backupOrigin?: string[]; 
  public get backupOrigin() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_origin'));
  }
  public set backupOrigin(value: string[]) {
    this._backupOrigin = value;
  }
  public resetBackupOrigin() {
    this._backupOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOriginInput() {
    return this._backupOrigin;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // charge_type - computed: true, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // origin - computed: false, optional: false, required: true
  private _origin?: string[]; 
  public get origin() {
    return cdktf.Fn.tolist(this.getListAttribute('origin'));
  }
  public set origin(value: string[]) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // origin_region_id - computed: false, optional: false, required: true
  private _originRegionId?: string; 
  public get originRegionId() {
    return this.getStringAttribute('origin_region_id');
  }
  public set originRegionId(value: string) {
    this._originRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originRegionIdInput() {
    return this._originRegionId;
  }

  // relate_domains - computed: false, optional: true, required: false
  private _relateDomains?: string[]; 
  public get relateDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('relate_domains'));
  }
  public set relateDomains(value: string[]) {
    this._relateDomains = value;
  }
  public resetRelateDomains() {
    this._relateDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relateDomainsInput() {
    return this._relateDomains;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // accelerate_regions - computed: false, optional: false, required: true
  private _accelerateRegions = new ZgaAcceleratorAccelerateRegionsList(this, "accelerate_regions", true);
  public get accelerateRegions() {
    return this._accelerateRegions;
  }
  public putAccelerateRegions(value: ZgaAcceleratorAccelerateRegions[] | cdktf.IResolvable) {
    this._accelerateRegions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerateRegionsInput() {
    return this._accelerateRegions.internalValue;
  }

  // access_control - computed: false, optional: true, required: false
  private _accessControl = new ZgaAcceleratorAccessControlOutputReference(this, "access_control");
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: ZgaAcceleratorAccessControl) {
    this._accessControl.internalValue = value;
  }
  public resetAccessControl() {
    this._accessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new ZgaAcceleratorHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: ZgaAcceleratorHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // l4_listeners - computed: false, optional: true, required: false
  private _l4Listeners = new ZgaAcceleratorL4ListenersList(this, "l4_listeners", true);
  public get l4Listeners() {
    return this._l4Listeners;
  }
  public putL4Listeners(value: ZgaAcceleratorL4Listeners[] | cdktf.IResolvable) {
    this._l4Listeners.internalValue = value;
  }
  public resetL4Listeners() {
    this._l4Listeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ListenersInput() {
    return this._l4Listeners.internalValue;
  }

  // l7_listeners - computed: false, optional: true, required: false
  private _l7Listeners = new ZgaAcceleratorL7ListenersList(this, "l7_listeners", true);
  public get l7Listeners() {
    return this._l7Listeners;
  }
  public putL7Listeners(value: ZgaAcceleratorL7Listeners[] | cdktf.IResolvable) {
    this._l7Listeners.internalValue = value;
  }
  public resetL7Listeners() {
    this._l7Listeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ListenersInput() {
    return this._l7Listeners.internalValue;
  }

  // protocol_opts - computed: false, optional: true, required: false
  private _protocolOpts = new ZgaAcceleratorProtocolOptsOutputReference(this, "protocol_opts");
  public get protocolOpts() {
    return this._protocolOpts;
  }
  public putProtocolOpts(value: ZgaAcceleratorProtocolOpts) {
    this._protocolOpts.internalValue = value;
  }
  public resetProtocolOpts() {
    this._protocolOpts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolOptsInput() {
    return this._protocolOpts.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ZgaAcceleratorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ZgaAcceleratorTimeouts) {
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
      accelerator_name: cdktf.stringToTerraform(this._acceleratorName),
      backup_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupOrigin),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      origin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._origin),
      origin_region_id: cdktf.stringToTerraform(this._originRegionId),
      relate_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relateDomains),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      accelerate_regions: cdktf.listMapper(zgaAcceleratorAccelerateRegionsToTerraform, true)(this._accelerateRegions.internalValue),
      access_control: zgaAcceleratorAccessControlToTerraform(this._accessControl.internalValue),
      health_check: zgaAcceleratorHealthCheckToTerraform(this._healthCheck.internalValue),
      l4_listeners: cdktf.listMapper(zgaAcceleratorL4ListenersToTerraform, true)(this._l4Listeners.internalValue),
      l7_listeners: cdktf.listMapper(zgaAcceleratorL7ListenersToTerraform, true)(this._l7Listeners.internalValue),
      protocol_opts: zgaAcceleratorProtocolOptsToTerraform(this._protocolOpts.internalValue),
      timeouts: zgaAcceleratorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerator_name: {
        value: cdktf.stringToHclTerraform(this._acceleratorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_origin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupOrigin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      origin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._origin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      origin_region_id: {
        value: cdktf.stringToHclTerraform(this._originRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relate_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relateDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accelerate_regions: {
        value: cdktf.listMapperHcl(zgaAcceleratorAccelerateRegionsToHclTerraform, true)(this._accelerateRegions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ZgaAcceleratorAccelerateRegionsList",
      },
      access_control: {
        value: zgaAcceleratorAccessControlToHclTerraform(this._accessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZgaAcceleratorAccessControlList",
      },
      health_check: {
        value: zgaAcceleratorHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZgaAcceleratorHealthCheckList",
      },
      l4_listeners: {
        value: cdktf.listMapperHcl(zgaAcceleratorL4ListenersToHclTerraform, true)(this._l4Listeners.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ZgaAcceleratorL4ListenersList",
      },
      l7_listeners: {
        value: cdktf.listMapperHcl(zgaAcceleratorL7ListenersToHclTerraform, true)(this._l7Listeners.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ZgaAcceleratorL7ListenersList",
      },
      protocol_opts: {
        value: zgaAcceleratorProtocolOptsToHclTerraform(this._protocolOpts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZgaAcceleratorProtocolOptsList",
      },
      timeouts: {
        value: zgaAcceleratorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZgaAcceleratorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
