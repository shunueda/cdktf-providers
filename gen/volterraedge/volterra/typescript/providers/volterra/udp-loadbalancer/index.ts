// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UdpLoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#advertise_on_public_default_vip UdpLoadbalancer#advertise_on_public_default_vip}
  */
  readonly advertiseOnPublicDefaultVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#annotations UdpLoadbalancer#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#description UdpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#disable UdpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#dns_volterra_managed UdpLoadbalancer#dns_volterra_managed}
  */
  readonly dnsVolterraManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#do_not_advertise UdpLoadbalancer#do_not_advertise}
  */
  readonly doNotAdvertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#domains UdpLoadbalancer#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#enable_per_packet_load_balancing UdpLoadbalancer#enable_per_packet_load_balancing}
  */
  readonly enablePerPacketLoadBalancing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#hash_policy_choice_random UdpLoadbalancer#hash_policy_choice_random}
  */
  readonly hashPolicyChoiceRandom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#hash_policy_choice_round_robin UdpLoadbalancer#hash_policy_choice_round_robin}
  */
  readonly hashPolicyChoiceRoundRobin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#hash_policy_choice_source_ip_stickiness UdpLoadbalancer#hash_policy_choice_source_ip_stickiness}
  */
  readonly hashPolicyChoiceSourceIpStickiness?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#id UdpLoadbalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#idle_timeout UdpLoadbalancer#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#labels UdpLoadbalancer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#listen_port UdpLoadbalancer#listen_port}
  */
  readonly listenPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#udp UdpLoadbalancer#udp}
  */
  readonly udp?: boolean | cdktf.IResolvable;
  /**
  * advertise_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#advertise_custom UdpLoadbalancer#advertise_custom}
  */
  readonly advertiseCustom?: UdpLoadbalancerAdvertiseCustom;
  /**
  * advertise_on_public block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#advertise_on_public UdpLoadbalancer#advertise_on_public}
  */
  readonly advertiseOnPublic?: UdpLoadbalancerAdvertiseOnPublic;
  /**
  * origin_pools_weights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#origin_pools_weights UdpLoadbalancer#origin_pools_weights}
  */
  readonly originPoolsWeights?: UdpLoadbalancerOriginPoolsWeights[] | cdktf.IResolvable;
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic {
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#public_ip UdpLoadbalancer#public_ip}
  */
  readonly publicIp: UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: udpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToTerraform(struct!.publicIp),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp) {
    this._publicIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#ip UdpLoadbalancer#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#ipv6 UdpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#network UdpLoadbalancer#network}
  */
  readonly network: string;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#site UdpLoadbalancer#site}
  */
  readonly site: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    network: cdktf.stringToTerraform(struct!.network),
    site: udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteToTerraform(struct!.site),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._network = undefined;
      this._site.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._network = value.network;
      this._site.internalValue = value.site;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // site - computed: false, optional: false, required: true
  private _site = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSite) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#ip UdpLoadbalancer#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#ipv6 UdpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#segment UdpLoadbalancer#segment}
  */
  readonly segment: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#site UdpLoadbalancer#site}
  */
  readonly site: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    segment: udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToTerraform(struct!.segment),
    site: udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteToTerraform(struct!.site),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentList",
    },
    site: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._segment.internalValue = undefined;
      this._site.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._segment.internalValue = value.segment;
      this._site.internalValue = value.site;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // segment - computed: false, optional: false, required: true
  private _segment = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // site - computed: false, optional: false, required: true
  private _site = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentSite) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#default_v6_vip UdpLoadbalancer#default_v6_vip}
  */
  readonly defaultV6Vip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#default_vip UdpLoadbalancer#default_vip}
  */
  readonly defaultVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#specific_v6_vip UdpLoadbalancer#specific_v6_vip}
  */
  readonly specificV6Vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#specific_vip UdpLoadbalancer#specific_vip}
  */
  readonly specificVip?: string;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#virtual_network UdpLoadbalancer#virtual_network}
  */
  readonly virtualNetwork: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_v6_vip: cdktf.booleanToTerraform(struct!.defaultV6Vip),
    default_vip: cdktf.booleanToTerraform(struct!.defaultVip),
    specific_v6_vip: cdktf.stringToTerraform(struct!.specificV6Vip),
    specific_vip: cdktf.stringToTerraform(struct!.specificVip),
    virtual_network: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToTerraform(struct!.virtualNetwork),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_v6_vip: {
      value: cdktf.booleanToHclTerraform(struct!.defaultV6Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_vip: {
      value: cdktf.booleanToHclTerraform(struct!.defaultVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific_v6_vip: {
      value: cdktf.stringToHclTerraform(struct!.specificV6Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_vip: {
      value: cdktf.stringToHclTerraform(struct!.specificVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultV6Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultV6Vip = this._defaultV6Vip;
    }
    if (this._defaultVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVip = this._defaultVip;
    }
    if (this._specificV6Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificV6Vip = this._specificV6Vip;
    }
    if (this._specificVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificVip = this._specificVip;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultV6Vip = undefined;
      this._defaultVip = undefined;
      this._specificV6Vip = undefined;
      this._specificVip = undefined;
      this._virtualNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultV6Vip = value.defaultV6Vip;
      this._defaultVip = value.defaultVip;
      this._specificV6Vip = value.specificV6Vip;
      this._specificVip = value.specificVip;
      this._virtualNetwork.internalValue = value.virtualNetwork;
    }
  }

  // default_v6_vip - computed: false, optional: true, required: false
  private _defaultV6Vip?: boolean | cdktf.IResolvable; 
  public get defaultV6Vip() {
    return this.getBooleanAttribute('default_v6_vip');
  }
  public set defaultV6Vip(value: boolean | cdktf.IResolvable) {
    this._defaultV6Vip = value;
  }
  public resetDefaultV6Vip() {
    this._defaultV6Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultV6VipInput() {
    return this._defaultV6Vip;
  }

  // default_vip - computed: false, optional: true, required: false
  private _defaultVip?: boolean | cdktf.IResolvable; 
  public get defaultVip() {
    return this.getBooleanAttribute('default_vip');
  }
  public set defaultVip(value: boolean | cdktf.IResolvable) {
    this._defaultVip = value;
  }
  public resetDefaultVip() {
    this._defaultVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVipInput() {
    return this._defaultVip;
  }

  // specific_v6_vip - computed: false, optional: true, required: false
  private _specificV6Vip?: string; 
  public get specificV6Vip() {
    return this.getStringAttribute('specific_v6_vip');
  }
  public set specificV6Vip(value: string) {
    this._specificV6Vip = value;
  }
  public resetSpecificV6Vip() {
    this._specificV6Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificV6VipInput() {
    return this._specificV6Vip;
  }

  // specific_vip - computed: false, optional: true, required: false
  private _specificVip?: string; 
  public get specificVip() {
    return this.getStringAttribute('specific_vip');
  }
  public set specificVip(value: string) {
    this._specificVip = value;
  }
  public resetSpecificVip() {
    this._specificVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificVipInput() {
    return this._specificVip;
  }

  // virtual_network - computed: false, optional: false, required: true
  private _virtualNetwork = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#network UdpLoadbalancer#network}
  */
  readonly network: string;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#virtual_site UdpLoadbalancer#virtual_site}
  */
  readonly virtualSite: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    virtual_site: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_site: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#ip UdpLoadbalancer#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#ipv6 UdpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#segment UdpLoadbalancer#segment}
  */
  readonly segment: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#virtual_site UdpLoadbalancer#virtual_site}
  */
  readonly virtualSite: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    segment: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToTerraform(struct!.segment),
    virtual_site: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentList",
    },
    virtual_site: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._segment.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._segment.internalValue = value.segment;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // segment - computed: false, optional: false, required: true
  private _segment = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#ip UdpLoadbalancer#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#ipv6 UdpLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#network UdpLoadbalancer#network}
  */
  readonly network: string;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#virtual_site UdpLoadbalancer#virtual_site}
  */
  readonly virtualSite: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    network: cdktf.stringToTerraform(struct!.network),
    virtual_site: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_site: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._network = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._network = value.network;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#site UdpLoadbalancer#site}
  */
  readonly site?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#virtual_site UdpLoadbalancer#virtual_site}
  */
  readonly virtualSite?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteToTerraform(struct!.site),
    virtual_site: udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference | UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteList",
    },
    virtual_site: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface UdpLoadbalancerAdvertiseCustomAdvertiseWhere {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#port UdpLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#port_ranges UdpLoadbalancer#port_ranges}
  */
  readonly portRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#use_default_port UdpLoadbalancer#use_default_port}
  */
  readonly useDefaultPort?: boolean | cdktf.IResolvable;
  /**
  * advertise_on_public block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#advertise_on_public UdpLoadbalancer#advertise_on_public}
  */
  readonly advertiseOnPublic?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#site UdpLoadbalancer#site}
  */
  readonly site?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSite;
  /**
  * site_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#site_segment UdpLoadbalancer#site_segment}
  */
  readonly siteSegment?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#virtual_network UdpLoadbalancer#virtual_network}
  */
  readonly virtualNetwork?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#virtual_site UdpLoadbalancer#virtual_site}
  */
  readonly virtualSite?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite;
  /**
  * virtual_site_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#virtual_site_segment UdpLoadbalancer#virtual_site_segment}
  */
  readonly virtualSiteSegment?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment;
  /**
  * virtual_site_with_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#virtual_site_with_vip UdpLoadbalancer#virtual_site_with_vip}
  */
  readonly virtualSiteWithVip?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip;
  /**
  * vk8s_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#vk8s_service UdpLoadbalancer#vk8s_service}
  */
  readonly vk8SService?: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService;
}

export function udpLoadbalancerAdvertiseCustomAdvertiseWhereToTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    use_default_port: cdktf.booleanToTerraform(struct!.useDefaultPort),
    advertise_on_public: udpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToTerraform(struct!.advertiseOnPublic),
    site: udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteToTerraform(struct!.site),
    site_segment: udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentToTerraform(struct!.siteSegment),
    virtual_network: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkToTerraform(struct!.virtualNetwork),
    virtual_site: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteToTerraform(struct!.virtualSite),
    virtual_site_segment: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToTerraform(struct!.virtualSiteSegment),
    virtual_site_with_vip: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToTerraform(struct!.virtualSiteWithVip),
    vk8s_service: udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceToTerraform(struct!.vk8SService),
  }
}


export function udpLoadbalancerAdvertiseCustomAdvertiseWhereToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomAdvertiseWhere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_port: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_on_public: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToHclTerraform(struct!.advertiseOnPublic),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicList",
    },
    site: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteList",
    },
    site_segment: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentToHclTerraform(struct!.siteSegment),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentList",
    },
    virtual_network: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkList",
    },
    virtual_site: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteList",
    },
    virtual_site_segment: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToHclTerraform(struct!.virtualSiteSegment),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentList",
    },
    virtual_site_with_vip: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToHclTerraform(struct!.virtualSiteWithVip),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipList",
    },
    vk8s_service: {
      value: udpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceToHclTerraform(struct!.vk8SService),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UdpLoadbalancerAdvertiseCustomAdvertiseWhere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._useDefaultPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultPort = this._useDefaultPort;
    }
    if (this._advertiseOnPublic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPublic = this._advertiseOnPublic?.internalValue;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._siteSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteSegment = this._siteSegment?.internalValue;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    if (this._virtualSiteSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSiteSegment = this._virtualSiteSegment?.internalValue;
    }
    if (this._virtualSiteWithVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSiteWithVip = this._virtualSiteWithVip?.internalValue;
    }
    if (this._vk8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vk8SService = this._vk8SService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._portRanges = undefined;
      this._useDefaultPort = undefined;
      this._advertiseOnPublic.internalValue = undefined;
      this._site.internalValue = undefined;
      this._siteSegment.internalValue = undefined;
      this._virtualNetwork.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
      this._virtualSiteSegment.internalValue = undefined;
      this._virtualSiteWithVip.internalValue = undefined;
      this._vk8SService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._portRanges = value.portRanges;
      this._useDefaultPort = value.useDefaultPort;
      this._advertiseOnPublic.internalValue = value.advertiseOnPublic;
      this._site.internalValue = value.site;
      this._siteSegment.internalValue = value.siteSegment;
      this._virtualNetwork.internalValue = value.virtualNetwork;
      this._virtualSite.internalValue = value.virtualSite;
      this._virtualSiteSegment.internalValue = value.virtualSiteSegment;
      this._virtualSiteWithVip.internalValue = value.virtualSiteWithVip;
      this._vk8SService.internalValue = value.vk8SService;
    }
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

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // use_default_port - computed: false, optional: true, required: false
  private _useDefaultPort?: boolean | cdktf.IResolvable; 
  public get useDefaultPort() {
    return this.getBooleanAttribute('use_default_port');
  }
  public set useDefaultPort(value: boolean | cdktf.IResolvable) {
    this._useDefaultPort = value;
  }
  public resetUseDefaultPort() {
    this._useDefaultPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultPortInput() {
    return this._useDefaultPort;
  }

  // advertise_on_public - computed: false, optional: true, required: false
  private _advertiseOnPublic = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference(this, "advertise_on_public");
  public get advertiseOnPublic() {
    return this._advertiseOnPublic;
  }
  public putAdvertiseOnPublic(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereAdvertiseOnPublic) {
    this._advertiseOnPublic.internalValue = value;
  }
  public resetAdvertiseOnPublic() {
    this._advertiseOnPublic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPublicInput() {
    return this._advertiseOnPublic.internalValue;
  }

  // site - computed: false, optional: true, required: false
  private _site = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // site_segment - computed: false, optional: true, required: false
  private _siteSegment = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference(this, "site_segment");
  public get siteSegment() {
    return this._siteSegment;
  }
  public putSiteSegment(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereSiteSegment) {
    this._siteSegment.internalValue = value;
  }
  public resetSiteSegment() {
    this._siteSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteSegmentInput() {
    return this._siteSegment.internalValue;
  }

  // virtual_network - computed: false, optional: true, required: false
  private _virtualNetwork = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  public resetVirtualNetwork() {
    this._virtualNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }

  // virtual_site_segment - computed: false, optional: true, required: false
  private _virtualSiteSegment = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference(this, "virtual_site_segment");
  public get virtualSiteSegment() {
    return this._virtualSiteSegment;
  }
  public putVirtualSiteSegment(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteSegment) {
    this._virtualSiteSegment.internalValue = value;
  }
  public resetVirtualSiteSegment() {
    this._virtualSiteSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteSegmentInput() {
    return this._virtualSiteSegment.internalValue;
  }

  // virtual_site_with_vip - computed: false, optional: true, required: false
  private _virtualSiteWithVip = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference(this, "virtual_site_with_vip");
  public get virtualSiteWithVip() {
    return this._virtualSiteWithVip;
  }
  public putVirtualSiteWithVip(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVirtualSiteWithVip) {
    this._virtualSiteWithVip.internalValue = value;
  }
  public resetVirtualSiteWithVip() {
    this._virtualSiteWithVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteWithVipInput() {
    return this._virtualSiteWithVip.internalValue;
  }

  // vk8s_service - computed: false, optional: true, required: false
  private _vk8SService = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference(this, "vk8s_service");
  public get vk8SService() {
    return this._vk8SService;
  }
  public putVk8SService(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhereVk8SService) {
    this._vk8SService.internalValue = value;
  }
  public resetVk8SService() {
    this._vk8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SServiceInput() {
    return this._vk8SService.internalValue;
  }
}

export class UdpLoadbalancerAdvertiseCustomAdvertiseWhereList extends cdktf.ComplexList {
  public internalValue? : UdpLoadbalancerAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable

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
  public get(index: number): UdpLoadbalancerAdvertiseCustomAdvertiseWhereOutputReference {
    return new UdpLoadbalancerAdvertiseCustomAdvertiseWhereOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UdpLoadbalancerAdvertiseCustom {
  /**
  * advertise_where block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#advertise_where UdpLoadbalancer#advertise_where}
  */
  readonly advertiseWhere: UdpLoadbalancerAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable;
}

export function udpLoadbalancerAdvertiseCustomToTerraform(struct?: UdpLoadbalancerAdvertiseCustomOutputReference | UdpLoadbalancerAdvertiseCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_where: cdktf.listMapper(udpLoadbalancerAdvertiseCustomAdvertiseWhereToTerraform, true)(struct!.advertiseWhere),
  }
}


export function udpLoadbalancerAdvertiseCustomToHclTerraform(struct?: UdpLoadbalancerAdvertiseCustomOutputReference | UdpLoadbalancerAdvertiseCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_where: {
      value: cdktf.listMapperHcl(udpLoadbalancerAdvertiseCustomAdvertiseWhereToHclTerraform, true)(struct!.advertiseWhere),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseCustomAdvertiseWhereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseWhere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseWhere = this._advertiseWhere?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseWhere.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseWhere.internalValue = value.advertiseWhere;
    }
  }

  // advertise_where - computed: false, optional: false, required: true
  private _advertiseWhere = new UdpLoadbalancerAdvertiseCustomAdvertiseWhereList(this, "advertise_where", false);
  public get advertiseWhere() {
    return this._advertiseWhere;
  }
  public putAdvertiseWhere(value: UdpLoadbalancerAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable) {
    this._advertiseWhere.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseWhereInput() {
    return this._advertiseWhere.internalValue;
  }
}
export interface UdpLoadbalancerAdvertiseOnPublicPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerAdvertiseOnPublicPublicIpToTerraform(struct?: UdpLoadbalancerAdvertiseOnPublicPublicIpOutputReference | UdpLoadbalancerAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerAdvertiseOnPublicPublicIpToHclTerraform(struct?: UdpLoadbalancerAdvertiseOnPublicPublicIpOutputReference | UdpLoadbalancerAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseOnPublicPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseOnPublicPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseOnPublicPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerAdvertiseOnPublic {
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#public_ip UdpLoadbalancer#public_ip}
  */
  readonly publicIp: UdpLoadbalancerAdvertiseOnPublicPublicIp;
}

export function udpLoadbalancerAdvertiseOnPublicToTerraform(struct?: UdpLoadbalancerAdvertiseOnPublicOutputReference | UdpLoadbalancerAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: udpLoadbalancerAdvertiseOnPublicPublicIpToTerraform(struct!.publicIp),
  }
}


export function udpLoadbalancerAdvertiseOnPublicToHclTerraform(struct?: UdpLoadbalancerAdvertiseOnPublicOutputReference | UdpLoadbalancerAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: udpLoadbalancerAdvertiseOnPublicPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerAdvertiseOnPublicPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerAdvertiseOnPublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerAdvertiseOnPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerAdvertiseOnPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp = new UdpLoadbalancerAdvertiseOnPublicPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: UdpLoadbalancerAdvertiseOnPublicPublicIp) {
    this._publicIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface UdpLoadbalancerOriginPoolsWeightsCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerOriginPoolsWeightsClusterToTerraform(struct?: UdpLoadbalancerOriginPoolsWeightsClusterOutputReference | UdpLoadbalancerOriginPoolsWeightsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerOriginPoolsWeightsClusterToHclTerraform(struct?: UdpLoadbalancerOriginPoolsWeightsClusterOutputReference | UdpLoadbalancerOriginPoolsWeightsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerOriginPoolsWeightsClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerOriginPoolsWeightsCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerOriginPoolsWeightsCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerOriginPoolsWeightsPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#name UdpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#namespace UdpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#tenant UdpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function udpLoadbalancerOriginPoolsWeightsPoolToTerraform(struct?: UdpLoadbalancerOriginPoolsWeightsPoolOutputReference | UdpLoadbalancerOriginPoolsWeightsPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function udpLoadbalancerOriginPoolsWeightsPoolToHclTerraform(struct?: UdpLoadbalancerOriginPoolsWeightsPoolOutputReference | UdpLoadbalancerOriginPoolsWeightsPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerOriginPoolsWeightsPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UdpLoadbalancerOriginPoolsWeightsPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerOriginPoolsWeightsPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface UdpLoadbalancerOriginPoolsWeights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#endpoint_subsets UdpLoadbalancer#endpoint_subsets}
  */
  readonly endpointSubsets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#priority UdpLoadbalancer#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#weight UdpLoadbalancer#weight}
  */
  readonly weight?: number;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#cluster UdpLoadbalancer#cluster}
  */
  readonly cluster?: UdpLoadbalancerOriginPoolsWeightsCluster;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#pool UdpLoadbalancer#pool}
  */
  readonly pool?: UdpLoadbalancerOriginPoolsWeightsPool;
}

export function udpLoadbalancerOriginPoolsWeightsToTerraform(struct?: UdpLoadbalancerOriginPoolsWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_subsets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointSubsets),
    priority: cdktf.numberToTerraform(struct!.priority),
    weight: cdktf.numberToTerraform(struct!.weight),
    cluster: udpLoadbalancerOriginPoolsWeightsClusterToTerraform(struct!.cluster),
    pool: udpLoadbalancerOriginPoolsWeightsPoolToTerraform(struct!.pool),
  }
}


export function udpLoadbalancerOriginPoolsWeightsToHclTerraform(struct?: UdpLoadbalancerOriginPoolsWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_subsets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointSubsets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster: {
      value: udpLoadbalancerOriginPoolsWeightsClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerOriginPoolsWeightsClusterList",
    },
    pool: {
      value: udpLoadbalancerOriginPoolsWeightsPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "list",
      storageClassType: "UdpLoadbalancerOriginPoolsWeightsPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UdpLoadbalancerOriginPoolsWeightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UdpLoadbalancerOriginPoolsWeights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointSubsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSubsets = this._endpointSubsets;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UdpLoadbalancerOriginPoolsWeights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointSubsets = undefined;
      this._priority = undefined;
      this._weight = undefined;
      this._cluster.internalValue = undefined;
      this._pool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointSubsets = value.endpointSubsets;
      this._priority = value.priority;
      this._weight = value.weight;
      this._cluster.internalValue = value.cluster;
      this._pool.internalValue = value.pool;
    }
  }

  // endpoint_subsets - computed: false, optional: true, required: false
  private _endpointSubsets?: { [key: string]: string }; 
  public get endpointSubsets() {
    return this.getStringMapAttribute('endpoint_subsets');
  }
  public set endpointSubsets(value: { [key: string]: string }) {
    this._endpointSubsets = value;
  }
  public resetEndpointSubsets() {
    this._endpointSubsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubsetsInput() {
    return this._endpointSubsets;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new UdpLoadbalancerOriginPoolsWeightsClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: UdpLoadbalancerOriginPoolsWeightsCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // pool - computed: false, optional: true, required: false
  private _pool = new UdpLoadbalancerOriginPoolsWeightsPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: UdpLoadbalancerOriginPoolsWeightsPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }
}

export class UdpLoadbalancerOriginPoolsWeightsList extends cdktf.ComplexList {
  public internalValue? : UdpLoadbalancerOriginPoolsWeights[] | cdktf.IResolvable

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
  public get(index: number): UdpLoadbalancerOriginPoolsWeightsOutputReference {
    return new UdpLoadbalancerOriginPoolsWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer volterra_udp_loadbalancer}
*/
export class UdpLoadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_udp_loadbalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UdpLoadbalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UdpLoadbalancer to import
  * @param importFromId The id of the existing UdpLoadbalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UdpLoadbalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_udp_loadbalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/udp_loadbalancer volterra_udp_loadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UdpLoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: UdpLoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_udp_loadbalancer',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseOnPublicDefaultVip = config.advertiseOnPublicDefaultVip;
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._dnsVolterraManaged = config.dnsVolterraManaged;
    this._doNotAdvertise = config.doNotAdvertise;
    this._domains = config.domains;
    this._enablePerPacketLoadBalancing = config.enablePerPacketLoadBalancing;
    this._hashPolicyChoiceRandom = config.hashPolicyChoiceRandom;
    this._hashPolicyChoiceRoundRobin = config.hashPolicyChoiceRoundRobin;
    this._hashPolicyChoiceSourceIpStickiness = config.hashPolicyChoiceSourceIpStickiness;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._labels = config.labels;
    this._listenPort = config.listenPort;
    this._name = config.name;
    this._namespace = config.namespace;
    this._udp = config.udp;
    this._advertiseCustom.internalValue = config.advertiseCustom;
    this._advertiseOnPublic.internalValue = config.advertiseOnPublic;
    this._originPoolsWeights.internalValue = config.originPoolsWeights;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_on_public_default_vip - computed: false, optional: true, required: false
  private _advertiseOnPublicDefaultVip?: boolean | cdktf.IResolvable; 
  public get advertiseOnPublicDefaultVip() {
    return this.getBooleanAttribute('advertise_on_public_default_vip');
  }
  public set advertiseOnPublicDefaultVip(value: boolean | cdktf.IResolvable) {
    this._advertiseOnPublicDefaultVip = value;
  }
  public resetAdvertiseOnPublicDefaultVip() {
    this._advertiseOnPublicDefaultVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPublicDefaultVipInput() {
    return this._advertiseOnPublicDefaultVip;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_volterra_managed - computed: false, optional: true, required: false
  private _dnsVolterraManaged?: boolean | cdktf.IResolvable; 
  public get dnsVolterraManaged() {
    return this.getBooleanAttribute('dns_volterra_managed');
  }
  public set dnsVolterraManaged(value: boolean | cdktf.IResolvable) {
    this._dnsVolterraManaged = value;
  }
  public resetDnsVolterraManaged() {
    this._dnsVolterraManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVolterraManagedInput() {
    return this._dnsVolterraManaged;
  }

  // do_not_advertise - computed: false, optional: true, required: false
  private _doNotAdvertise?: boolean | cdktf.IResolvable; 
  public get doNotAdvertise() {
    return this.getBooleanAttribute('do_not_advertise');
  }
  public set doNotAdvertise(value: boolean | cdktf.IResolvable) {
    this._doNotAdvertise = value;
  }
  public resetDoNotAdvertise() {
    this._doNotAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotAdvertiseInput() {
    return this._doNotAdvertise;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // enable_per_packet_load_balancing - computed: false, optional: true, required: false
  private _enablePerPacketLoadBalancing?: boolean | cdktf.IResolvable; 
  public get enablePerPacketLoadBalancing() {
    return this.getBooleanAttribute('enable_per_packet_load_balancing');
  }
  public set enablePerPacketLoadBalancing(value: boolean | cdktf.IResolvable) {
    this._enablePerPacketLoadBalancing = value;
  }
  public resetEnablePerPacketLoadBalancing() {
    this._enablePerPacketLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerPacketLoadBalancingInput() {
    return this._enablePerPacketLoadBalancing;
  }

  // hash_policy_choice_random - computed: false, optional: true, required: false
  private _hashPolicyChoiceRandom?: boolean | cdktf.IResolvable; 
  public get hashPolicyChoiceRandom() {
    return this.getBooleanAttribute('hash_policy_choice_random');
  }
  public set hashPolicyChoiceRandom(value: boolean | cdktf.IResolvable) {
    this._hashPolicyChoiceRandom = value;
  }
  public resetHashPolicyChoiceRandom() {
    this._hashPolicyChoiceRandom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPolicyChoiceRandomInput() {
    return this._hashPolicyChoiceRandom;
  }

  // hash_policy_choice_round_robin - computed: false, optional: true, required: false
  private _hashPolicyChoiceRoundRobin?: boolean | cdktf.IResolvable; 
  public get hashPolicyChoiceRoundRobin() {
    return this.getBooleanAttribute('hash_policy_choice_round_robin');
  }
  public set hashPolicyChoiceRoundRobin(value: boolean | cdktf.IResolvable) {
    this._hashPolicyChoiceRoundRobin = value;
  }
  public resetHashPolicyChoiceRoundRobin() {
    this._hashPolicyChoiceRoundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPolicyChoiceRoundRobinInput() {
    return this._hashPolicyChoiceRoundRobin;
  }

  // hash_policy_choice_source_ip_stickiness - computed: false, optional: true, required: false
  private _hashPolicyChoiceSourceIpStickiness?: boolean | cdktf.IResolvable; 
  public get hashPolicyChoiceSourceIpStickiness() {
    return this.getBooleanAttribute('hash_policy_choice_source_ip_stickiness');
  }
  public set hashPolicyChoiceSourceIpStickiness(value: boolean | cdktf.IResolvable) {
    this._hashPolicyChoiceSourceIpStickiness = value;
  }
  public resetHashPolicyChoiceSourceIpStickiness() {
    this._hashPolicyChoiceSourceIpStickiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPolicyChoiceSourceIpStickinessInput() {
    return this._hashPolicyChoiceSourceIpStickiness;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // listen_port - computed: false, optional: true, required: false
  private _listenPort?: number; 
  public get listenPort() {
    return this.getNumberAttribute('listen_port');
  }
  public set listenPort(value: number) {
    this._listenPort = value;
  }
  public resetListenPort() {
    this._listenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenPortInput() {
    return this._listenPort;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: boolean | cdktf.IResolvable; 
  public get udp() {
    return this.getBooleanAttribute('udp');
  }
  public set udp(value: boolean | cdktf.IResolvable) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }

  // advertise_custom - computed: false, optional: true, required: false
  private _advertiseCustom = new UdpLoadbalancerAdvertiseCustomOutputReference(this, "advertise_custom");
  public get advertiseCustom() {
    return this._advertiseCustom;
  }
  public putAdvertiseCustom(value: UdpLoadbalancerAdvertiseCustom) {
    this._advertiseCustom.internalValue = value;
  }
  public resetAdvertiseCustom() {
    this._advertiseCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseCustomInput() {
    return this._advertiseCustom.internalValue;
  }

  // advertise_on_public - computed: false, optional: true, required: false
  private _advertiseOnPublic = new UdpLoadbalancerAdvertiseOnPublicOutputReference(this, "advertise_on_public");
  public get advertiseOnPublic() {
    return this._advertiseOnPublic;
  }
  public putAdvertiseOnPublic(value: UdpLoadbalancerAdvertiseOnPublic) {
    this._advertiseOnPublic.internalValue = value;
  }
  public resetAdvertiseOnPublic() {
    this._advertiseOnPublic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPublicInput() {
    return this._advertiseOnPublic.internalValue;
  }

  // origin_pools_weights - computed: false, optional: true, required: false
  private _originPoolsWeights = new UdpLoadbalancerOriginPoolsWeightsList(this, "origin_pools_weights", false);
  public get originPoolsWeights() {
    return this._originPoolsWeights;
  }
  public putOriginPoolsWeights(value: UdpLoadbalancerOriginPoolsWeights[] | cdktf.IResolvable) {
    this._originPoolsWeights.internalValue = value;
  }
  public resetOriginPoolsWeights() {
    this._originPoolsWeights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPoolsWeightsInput() {
    return this._originPoolsWeights.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_on_public_default_vip: cdktf.booleanToTerraform(this._advertiseOnPublicDefaultVip),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      dns_volterra_managed: cdktf.booleanToTerraform(this._dnsVolterraManaged),
      do_not_advertise: cdktf.booleanToTerraform(this._doNotAdvertise),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      enable_per_packet_load_balancing: cdktf.booleanToTerraform(this._enablePerPacketLoadBalancing),
      hash_policy_choice_random: cdktf.booleanToTerraform(this._hashPolicyChoiceRandom),
      hash_policy_choice_round_robin: cdktf.booleanToTerraform(this._hashPolicyChoiceRoundRobin),
      hash_policy_choice_source_ip_stickiness: cdktf.booleanToTerraform(this._hashPolicyChoiceSourceIpStickiness),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      listen_port: cdktf.numberToTerraform(this._listenPort),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      udp: cdktf.booleanToTerraform(this._udp),
      advertise_custom: udpLoadbalancerAdvertiseCustomToTerraform(this._advertiseCustom.internalValue),
      advertise_on_public: udpLoadbalancerAdvertiseOnPublicToTerraform(this._advertiseOnPublic.internalValue),
      origin_pools_weights: cdktf.listMapper(udpLoadbalancerOriginPoolsWeightsToTerraform, true)(this._originPoolsWeights.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_on_public_default_vip: {
        value: cdktf.booleanToHclTerraform(this._advertiseOnPublicDefaultVip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_volterra_managed: {
        value: cdktf.booleanToHclTerraform(this._dnsVolterraManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      do_not_advertise: {
        value: cdktf.booleanToHclTerraform(this._doNotAdvertise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_per_packet_load_balancing: {
        value: cdktf.booleanToHclTerraform(this._enablePerPacketLoadBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hash_policy_choice_random: {
        value: cdktf.booleanToHclTerraform(this._hashPolicyChoiceRandom),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hash_policy_choice_round_robin: {
        value: cdktf.booleanToHclTerraform(this._hashPolicyChoiceRoundRobin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hash_policy_choice_source_ip_stickiness: {
        value: cdktf.booleanToHclTerraform(this._hashPolicyChoiceSourceIpStickiness),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      listen_port: {
        value: cdktf.numberToHclTerraform(this._listenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp: {
        value: cdktf.booleanToHclTerraform(this._udp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_custom: {
        value: udpLoadbalancerAdvertiseCustomToHclTerraform(this._advertiseCustom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UdpLoadbalancerAdvertiseCustomList",
      },
      advertise_on_public: {
        value: udpLoadbalancerAdvertiseOnPublicToHclTerraform(this._advertiseOnPublic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UdpLoadbalancerAdvertiseOnPublicList",
      },
      origin_pools_weights: {
        value: cdktf.listMapperHcl(udpLoadbalancerOriginPoolsWeightsToHclTerraform, true)(this._originPoolsWeights.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UdpLoadbalancerOriginPoolsWeightsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
