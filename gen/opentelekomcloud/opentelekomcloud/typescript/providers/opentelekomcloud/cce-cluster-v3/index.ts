// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CceClusterV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#api_access_trustlist CceClusterV3#api_access_trustlist}
  */
  readonly apiAccessTrustlist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}
  */
  readonly authenticatingProxyCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}
  */
  readonly billingMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}
  */
  readonly containerNetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}
  */
  readonly containerNetworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#custom_san CceClusterV3#custom_san}
  */
  readonly customSan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}
  */
  readonly deleteAllNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}
  */
  readonly deleteAllStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}
  */
  readonly deleteEfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}
  */
  readonly deleteEni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}
  */
  readonly deleteEvs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}
  */
  readonly deleteNet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}
  */
  readonly deleteObs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}
  */
  readonly deleteSfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#description CceClusterV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}
  */
  readonly eip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#enable_volume_encryption CceClusterV3#enable_volume_encryption}
  */
  readonly enableVolumeEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}
  */
  readonly eniSubnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}
  */
  readonly eniSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}
  */
  readonly extendParam?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}
  */
  readonly highwaySubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#id CceClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}
  */
  readonly ignoreAddons?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}
  */
  readonly ignoreCertificateClustersData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}
  */
  readonly ignoreCertificateUsersData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#ipv6_enable CceClusterV3#ipv6_enable}
  */
  readonly ipv6Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}
  */
  readonly kubeProxyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}
  */
  readonly kubernetesSvcIpRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#name CceClusterV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}
  */
  readonly noAddons?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#region CceClusterV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#security_group_id CceClusterV3#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#support_istio CceClusterV3#support_istio}
  */
  readonly supportIstio?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#timezone CceClusterV3#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}
  */
  readonly vpcId: string;
  /**
  * authenticating_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#authenticating_proxy CceClusterV3#authenticating_proxy}
  */
  readonly authenticatingProxy?: CceClusterV3AuthenticatingProxy;
  /**
  * component_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#component_configurations CceClusterV3#component_configurations}
  */
  readonly componentConfigurations?: CceClusterV3ComponentConfigurations[] | cdktf.IResolvable;
  /**
  * masters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#masters CceClusterV3#masters}
  */
  readonly masters?: CceClusterV3Masters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#timeouts CceClusterV3#timeouts}
  */
  readonly timeouts?: CceClusterV3Timeouts;
}
export interface CceClusterV3CertificateClusters {
}

export function cceClusterV3CertificateClustersToTerraform(struct?: CceClusterV3CertificateClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cceClusterV3CertificateClustersToHclTerraform(struct?: CceClusterV3CertificateClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CceClusterV3CertificateClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceClusterV3CertificateClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceClusterV3CertificateClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority_data - computed: true, optional: false, required: false
  public get certificateAuthorityData() {
    return this.getStringAttribute('certificate_authority_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class CceClusterV3CertificateClustersList extends cdktf.ComplexList {

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
  public get(index: number): CceClusterV3CertificateClustersOutputReference {
    return new CceClusterV3CertificateClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceClusterV3CertificateUsers {
}

export function cceClusterV3CertificateUsersToTerraform(struct?: CceClusterV3CertificateUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cceClusterV3CertificateUsersToHclTerraform(struct?: CceClusterV3CertificateUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CceClusterV3CertificateUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceClusterV3CertificateUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceClusterV3CertificateUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate_data - computed: true, optional: false, required: false
  public get clientCertificateData() {
    return this.getStringAttribute('client_certificate_data');
  }

  // client_key_data - computed: true, optional: false, required: false
  public get clientKeyData() {
    return this.getStringAttribute('client_key_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class CceClusterV3CertificateUsersList extends cdktf.ComplexList {

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
  public get(index: number): CceClusterV3CertificateUsersOutputReference {
    return new CceClusterV3CertificateUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceClusterV3AuthenticatingProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#ca CceClusterV3#ca}
  */
  readonly ca: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#cert CceClusterV3#cert}
  */
  readonly cert: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#private_key CceClusterV3#private_key}
  */
  readonly privateKey: string;
}

export function cceClusterV3AuthenticatingProxyToTerraform(struct?: CceClusterV3AuthenticatingProxyOutputReference | CceClusterV3AuthenticatingProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    cert: cdktf.stringToTerraform(struct!.cert),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function cceClusterV3AuthenticatingProxyToHclTerraform(struct?: CceClusterV3AuthenticatingProxyOutputReference | CceClusterV3AuthenticatingProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CceClusterV3AuthenticatingProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CceClusterV3AuthenticatingProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceClusterV3AuthenticatingProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ca = undefined;
      this._cert = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ca = value.ca;
      this._cert = value.cert;
      this._privateKey = value.privateKey;
    }
  }

  // ca - computed: false, optional: false, required: true
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface CceClusterV3ComponentConfigurationsConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#name CceClusterV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#value CceClusterV3#value}
  */
  readonly value: string;
}

export function cceClusterV3ComponentConfigurationsConfigurationsToTerraform(struct?: CceClusterV3ComponentConfigurationsConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cceClusterV3ComponentConfigurationsConfigurationsToHclTerraform(struct?: CceClusterV3ComponentConfigurationsConfigurations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CceClusterV3ComponentConfigurationsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceClusterV3ComponentConfigurationsConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceClusterV3ComponentConfigurationsConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CceClusterV3ComponentConfigurationsConfigurationsList extends cdktf.ComplexList {
  public internalValue? : CceClusterV3ComponentConfigurationsConfigurations[] | cdktf.IResolvable

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
  public get(index: number): CceClusterV3ComponentConfigurationsConfigurationsOutputReference {
    return new CceClusterV3ComponentConfigurationsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceClusterV3ComponentConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#name CceClusterV3#name}
  */
  readonly name: string;
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#configurations CceClusterV3#configurations}
  */
  readonly configurations?: CceClusterV3ComponentConfigurationsConfigurations[] | cdktf.IResolvable;
}

export function cceClusterV3ComponentConfigurationsToTerraform(struct?: CceClusterV3ComponentConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    configurations: cdktf.listMapper(cceClusterV3ComponentConfigurationsConfigurationsToTerraform, true)(struct!.configurations),
  }
}


export function cceClusterV3ComponentConfigurationsToHclTerraform(struct?: CceClusterV3ComponentConfigurations | cdktf.IResolvable): any {
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
    configurations: {
      value: cdktf.listMapperHcl(cceClusterV3ComponentConfigurationsConfigurationsToHclTerraform, true)(struct!.configurations),
      isBlock: true,
      type: "list",
      storageClassType: "CceClusterV3ComponentConfigurationsConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CceClusterV3ComponentConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceClusterV3ComponentConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceClusterV3ComponentConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._configurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._configurations.internalValue = value.configurations;
    }
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

  // configurations - computed: false, optional: true, required: false
  private _configurations = new CceClusterV3ComponentConfigurationsConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: CceClusterV3ComponentConfigurationsConfigurations[] | cdktf.IResolvable) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }
}

export class CceClusterV3ComponentConfigurationsList extends cdktf.ComplexList {
  public internalValue? : CceClusterV3ComponentConfigurations[] | cdktf.IResolvable

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
  public get(index: number): CceClusterV3ComponentConfigurationsOutputReference {
    return new CceClusterV3ComponentConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceClusterV3Masters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#availability_zone CceClusterV3#availability_zone}
  */
  readonly availabilityZone?: string;
}

export function cceClusterV3MastersToTerraform(struct?: CceClusterV3Masters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
  }
}


export function cceClusterV3MastersToHclTerraform(struct?: CceClusterV3Masters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CceClusterV3MastersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceClusterV3Masters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceClusterV3Masters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
    }
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }
}

export class CceClusterV3MastersList extends cdktf.ComplexList {
  public internalValue? : CceClusterV3Masters[] | cdktf.IResolvable

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
  public get(index: number): CceClusterV3MastersOutputReference {
    return new CceClusterV3MastersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceClusterV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#create CceClusterV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#delete CceClusterV3#delete}
  */
  readonly delete?: string;
}

export function cceClusterV3TimeoutsToTerraform(struct?: CceClusterV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function cceClusterV3TimeoutsToHclTerraform(struct?: CceClusterV3Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CceClusterV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CceClusterV3Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceClusterV3Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3 opentelekomcloud_cce_cluster_v3}
*/
export class CceClusterV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cce_cluster_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CceClusterV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CceClusterV3 to import
  * @param importFromId The id of the existing CceClusterV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CceClusterV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_cce_cluster_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_cluster_v3 opentelekomcloud_cce_cluster_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CceClusterV3Config
  */
  public constructor(scope: Construct, id: string, config: CceClusterV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_cluster_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._apiAccessTrustlist = config.apiAccessTrustlist;
    this._authenticatingProxyCa = config.authenticatingProxyCa;
    this._authenticationMode = config.authenticationMode;
    this._billingMode = config.billingMode;
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._containerNetworkCidr = config.containerNetworkCidr;
    this._containerNetworkType = config.containerNetworkType;
    this._customSan = config.customSan;
    this._deleteAllNetwork = config.deleteAllNetwork;
    this._deleteAllStorage = config.deleteAllStorage;
    this._deleteEfs = config.deleteEfs;
    this._deleteEni = config.deleteEni;
    this._deleteEvs = config.deleteEvs;
    this._deleteNet = config.deleteNet;
    this._deleteObs = config.deleteObs;
    this._deleteSfs = config.deleteSfs;
    this._description = config.description;
    this._eip = config.eip;
    this._enableVolumeEncryption = config.enableVolumeEncryption;
    this._eniSubnetCidr = config.eniSubnetCidr;
    this._eniSubnetId = config.eniSubnetId;
    this._extendParam = config.extendParam;
    this._flavorId = config.flavorId;
    this._highwaySubnetId = config.highwaySubnetId;
    this._id = config.id;
    this._ignoreAddons = config.ignoreAddons;
    this._ignoreCertificateClustersData = config.ignoreCertificateClustersData;
    this._ignoreCertificateUsersData = config.ignoreCertificateUsersData;
    this._ipv6Enable = config.ipv6Enable;
    this._kubeProxyMode = config.kubeProxyMode;
    this._kubernetesSvcIpRange = config.kubernetesSvcIpRange;
    this._labels = config.labels;
    this._multiAz = config.multiAz;
    this._name = config.name;
    this._noAddons = config.noAddons;
    this._region = config.region;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
    this._supportIstio = config.supportIstio;
    this._timezone = config.timezone;
    this._vpcId = config.vpcId;
    this._authenticatingProxy.internalValue = config.authenticatingProxy;
    this._componentConfigurations.internalValue = config.componentConfigurations;
    this._masters.internalValue = config.masters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // api_access_trustlist - computed: false, optional: true, required: false
  private _apiAccessTrustlist?: string[]; 
  public get apiAccessTrustlist() {
    return this.getListAttribute('api_access_trustlist');
  }
  public set apiAccessTrustlist(value: string[]) {
    this._apiAccessTrustlist = value;
  }
  public resetApiAccessTrustlist() {
    this._apiAccessTrustlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAccessTrustlistInput() {
    return this._apiAccessTrustlist;
  }

  // authenticating_proxy_ca - computed: false, optional: true, required: false
  private _authenticatingProxyCa?: string; 
  public get authenticatingProxyCa() {
    return this.getStringAttribute('authenticating_proxy_ca');
  }
  public set authenticatingProxyCa(value: string) {
    this._authenticatingProxyCa = value;
  }
  public resetAuthenticatingProxyCa() {
    this._authenticatingProxyCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatingProxyCaInput() {
    return this._authenticatingProxyCa;
  }

  // authentication_mode - computed: false, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // billing_mode - computed: true, optional: true, required: false
  private _billingMode?: number; 
  public get billingMode() {
    return this.getNumberAttribute('billing_mode');
  }
  public set billingMode(value: number) {
    this._billingMode = value;
  }
  public resetBillingMode() {
    this._billingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingModeInput() {
    return this._billingMode;
  }

  // certificate_clusters - computed: true, optional: false, required: false
  private _certificateClusters = new CceClusterV3CertificateClustersList(this, "certificate_clusters", false);
  public get certificateClusters() {
    return this._certificateClusters;
  }

  // certificate_users - computed: true, optional: false, required: false
  private _certificateUsers = new CceClusterV3CertificateUsersList(this, "certificate_users", false);
  public get certificateUsers() {
    return this._certificateUsers;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // cluster_version - computed: true, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // container_network_cidr - computed: true, optional: true, required: false
  private _containerNetworkCidr?: string; 
  public get containerNetworkCidr() {
    return this.getStringAttribute('container_network_cidr');
  }
  public set containerNetworkCidr(value: string) {
    this._containerNetworkCidr = value;
  }
  public resetContainerNetworkCidr() {
    this._containerNetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNetworkCidrInput() {
    return this._containerNetworkCidr;
  }

  // container_network_type - computed: false, optional: false, required: true
  private _containerNetworkType?: string; 
  public get containerNetworkType() {
    return this.getStringAttribute('container_network_type');
  }
  public set containerNetworkType(value: string) {
    this._containerNetworkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNetworkTypeInput() {
    return this._containerNetworkType;
  }

  // custom_san - computed: true, optional: true, required: false
  private _customSan?: string[]; 
  public get customSan() {
    return this.getListAttribute('custom_san');
  }
  public set customSan(value: string[]) {
    this._customSan = value;
  }
  public resetCustomSan() {
    this._customSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSanInput() {
    return this._customSan;
  }

  // delete_all_network - computed: false, optional: true, required: false
  private _deleteAllNetwork?: string; 
  public get deleteAllNetwork() {
    return this.getStringAttribute('delete_all_network');
  }
  public set deleteAllNetwork(value: string) {
    this._deleteAllNetwork = value;
  }
  public resetDeleteAllNetwork() {
    this._deleteAllNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAllNetworkInput() {
    return this._deleteAllNetwork;
  }

  // delete_all_storage - computed: false, optional: true, required: false
  private _deleteAllStorage?: string; 
  public get deleteAllStorage() {
    return this.getStringAttribute('delete_all_storage');
  }
  public set deleteAllStorage(value: string) {
    this._deleteAllStorage = value;
  }
  public resetDeleteAllStorage() {
    this._deleteAllStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAllStorageInput() {
    return this._deleteAllStorage;
  }

  // delete_efs - computed: false, optional: true, required: false
  private _deleteEfs?: string; 
  public get deleteEfs() {
    return this.getStringAttribute('delete_efs');
  }
  public set deleteEfs(value: string) {
    this._deleteEfs = value;
  }
  public resetDeleteEfs() {
    this._deleteEfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEfsInput() {
    return this._deleteEfs;
  }

  // delete_eni - computed: false, optional: true, required: false
  private _deleteEni?: string; 
  public get deleteEni() {
    return this.getStringAttribute('delete_eni');
  }
  public set deleteEni(value: string) {
    this._deleteEni = value;
  }
  public resetDeleteEni() {
    this._deleteEni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEniInput() {
    return this._deleteEni;
  }

  // delete_evs - computed: false, optional: true, required: false
  private _deleteEvs?: string; 
  public get deleteEvs() {
    return this.getStringAttribute('delete_evs');
  }
  public set deleteEvs(value: string) {
    this._deleteEvs = value;
  }
  public resetDeleteEvs() {
    this._deleteEvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEvsInput() {
    return this._deleteEvs;
  }

  // delete_net - computed: false, optional: true, required: false
  private _deleteNet?: string; 
  public get deleteNet() {
    return this.getStringAttribute('delete_net');
  }
  public set deleteNet(value: string) {
    this._deleteNet = value;
  }
  public resetDeleteNet() {
    this._deleteNet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNetInput() {
    return this._deleteNet;
  }

  // delete_obs - computed: false, optional: true, required: false
  private _deleteObs?: string; 
  public get deleteObs() {
    return this.getStringAttribute('delete_obs');
  }
  public set deleteObs(value: string) {
    this._deleteObs = value;
  }
  public resetDeleteObs() {
    this._deleteObs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteObsInput() {
    return this._deleteObs;
  }

  // delete_sfs - computed: false, optional: true, required: false
  private _deleteSfs?: string; 
  public get deleteSfs() {
    return this.getStringAttribute('delete_sfs');
  }
  public set deleteSfs(value: string) {
    this._deleteSfs = value;
  }
  public resetDeleteSfs() {
    this._deleteSfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSfsInput() {
    return this._deleteSfs;
  }

  // description - computed: true, optional: true, required: false
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

  // eip - computed: false, optional: true, required: false
  private _eip?: string; 
  public get eip() {
    return this.getStringAttribute('eip');
  }
  public set eip(value: string) {
    this._eip = value;
  }
  public resetEip() {
    this._eip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInput() {
    return this._eip;
  }

  // enable_volume_encryption - computed: true, optional: true, required: false
  private _enableVolumeEncryption?: boolean | cdktf.IResolvable; 
  public get enableVolumeEncryption() {
    return this.getBooleanAttribute('enable_volume_encryption');
  }
  public set enableVolumeEncryption(value: boolean | cdktf.IResolvable) {
    this._enableVolumeEncryption = value;
  }
  public resetEnableVolumeEncryption() {
    this._enableVolumeEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVolumeEncryptionInput() {
    return this._enableVolumeEncryption;
  }

  // eni_subnet_cidr - computed: true, optional: true, required: false
  private _eniSubnetCidr?: string; 
  public get eniSubnetCidr() {
    return this.getStringAttribute('eni_subnet_cidr');
  }
  public set eniSubnetCidr(value: string) {
    this._eniSubnetCidr = value;
  }
  public resetEniSubnetCidr() {
    this._eniSubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eniSubnetCidrInput() {
    return this._eniSubnetCidr;
  }

  // eni_subnet_id - computed: true, optional: true, required: false
  private _eniSubnetId?: string; 
  public get eniSubnetId() {
    return this.getStringAttribute('eni_subnet_id');
  }
  public set eniSubnetId(value: string) {
    this._eniSubnetId = value;
  }
  public resetEniSubnetId() {
    this._eniSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eniSubnetIdInput() {
    return this._eniSubnetId;
  }

  // extend_param - computed: false, optional: true, required: false
  private _extendParam?: { [key: string]: string }; 
  public get extendParam() {
    return this.getStringMapAttribute('extend_param');
  }
  public set extendParam(value: { [key: string]: string }) {
    this._extendParam = value;
  }
  public resetExtendParam() {
    this._extendParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendParamInput() {
    return this._extendParam;
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getStringAttribute('external');
  }

  // external_otc - computed: true, optional: false, required: false
  public get externalOtc() {
    return this.getStringAttribute('external_otc');
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // highway_subnet_id - computed: true, optional: true, required: false
  private _highwaySubnetId?: string; 
  public get highwaySubnetId() {
    return this.getStringAttribute('highway_subnet_id');
  }
  public set highwaySubnetId(value: string) {
    this._highwaySubnetId = value;
  }
  public resetHighwaySubnetId() {
    this._highwaySubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highwaySubnetIdInput() {
    return this._highwaySubnetId;
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

  // ignore_addons - computed: false, optional: true, required: false
  private _ignoreAddons?: boolean | cdktf.IResolvable; 
  public get ignoreAddons() {
    return this.getBooleanAttribute('ignore_addons');
  }
  public set ignoreAddons(value: boolean | cdktf.IResolvable) {
    this._ignoreAddons = value;
  }
  public resetIgnoreAddons() {
    this._ignoreAddons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAddonsInput() {
    return this._ignoreAddons;
  }

  // ignore_certificate_clusters_data - computed: false, optional: true, required: false
  private _ignoreCertificateClustersData?: boolean | cdktf.IResolvable; 
  public get ignoreCertificateClustersData() {
    return this.getBooleanAttribute('ignore_certificate_clusters_data');
  }
  public set ignoreCertificateClustersData(value: boolean | cdktf.IResolvable) {
    this._ignoreCertificateClustersData = value;
  }
  public resetIgnoreCertificateClustersData() {
    this._ignoreCertificateClustersData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateClustersDataInput() {
    return this._ignoreCertificateClustersData;
  }

  // ignore_certificate_users_data - computed: false, optional: true, required: false
  private _ignoreCertificateUsersData?: boolean | cdktf.IResolvable; 
  public get ignoreCertificateUsersData() {
    return this.getBooleanAttribute('ignore_certificate_users_data');
  }
  public set ignoreCertificateUsersData(value: boolean | cdktf.IResolvable) {
    this._ignoreCertificateUsersData = value;
  }
  public resetIgnoreCertificateUsersData() {
    this._ignoreCertificateUsersData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateUsersDataInput() {
    return this._ignoreCertificateUsersData;
  }

  // installed_addons - computed: true, optional: false, required: false
  public get installedAddons() {
    return cdktf.Fn.tolist(this.getListAttribute('installed_addons'));
  }

  // internal - computed: true, optional: false, required: false
  public get internal() {
    return this.getStringAttribute('internal');
  }

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: boolean | cdktf.IResolvable; 
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: boolean | cdktf.IResolvable) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // kube_proxy_mode - computed: true, optional: true, required: false
  private _kubeProxyMode?: string; 
  public get kubeProxyMode() {
    return this.getStringAttribute('kube_proxy_mode');
  }
  public set kubeProxyMode(value: string) {
    this._kubeProxyMode = value;
  }
  public resetKubeProxyMode() {
    this._kubeProxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeProxyModeInput() {
    return this._kubeProxyMode;
  }

  // kubernetes_svc_ip_range - computed: true, optional: true, required: false
  private _kubernetesSvcIpRange?: string; 
  public get kubernetesSvcIpRange() {
    return this.getStringAttribute('kubernetes_svc_ip_range');
  }
  public set kubernetesSvcIpRange(value: string) {
    this._kubernetesSvcIpRange = value;
  }
  public resetKubernetesSvcIpRange() {
    this._kubernetesSvcIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSvcIpRangeInput() {
    return this._kubernetesSvcIpRange;
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

  // multi_az - computed: false, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
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

  // no_addons - computed: false, optional: true, required: false
  private _noAddons?: boolean | cdktf.IResolvable; 
  public get noAddons() {
    return this.getBooleanAttribute('no_addons');
  }
  public set noAddons(value: boolean | cdktf.IResolvable) {
    this._noAddons = value;
  }
  public resetNoAddons() {
    this._noAddons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAddonsInput() {
    return this._noAddons;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_control - computed: true, optional: false, required: false
  public get securityGroupControl() {
    return this.getStringAttribute('security_group_control');
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_node - computed: true, optional: false, required: false
  public get securityGroupNode() {
    return this.getStringAttribute('security_group_node');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // support_istio - computed: true, optional: true, required: false
  private _supportIstio?: boolean | cdktf.IResolvable; 
  public get supportIstio() {
    return this.getBooleanAttribute('support_istio');
  }
  public set supportIstio(value: boolean | cdktf.IResolvable) {
    this._supportIstio = value;
  }
  public resetSupportIstio() {
    this._supportIstio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportIstioInput() {
    return this._supportIstio;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // authenticating_proxy - computed: false, optional: true, required: false
  private _authenticatingProxy = new CceClusterV3AuthenticatingProxyOutputReference(this, "authenticating_proxy");
  public get authenticatingProxy() {
    return this._authenticatingProxy;
  }
  public putAuthenticatingProxy(value: CceClusterV3AuthenticatingProxy) {
    this._authenticatingProxy.internalValue = value;
  }
  public resetAuthenticatingProxy() {
    this._authenticatingProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatingProxyInput() {
    return this._authenticatingProxy.internalValue;
  }

  // component_configurations - computed: false, optional: true, required: false
  private _componentConfigurations = new CceClusterV3ComponentConfigurationsList(this, "component_configurations", false);
  public get componentConfigurations() {
    return this._componentConfigurations;
  }
  public putComponentConfigurations(value: CceClusterV3ComponentConfigurations[] | cdktf.IResolvable) {
    this._componentConfigurations.internalValue = value;
  }
  public resetComponentConfigurations() {
    this._componentConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentConfigurationsInput() {
    return this._componentConfigurations.internalValue;
  }

  // masters - computed: false, optional: true, required: false
  private _masters = new CceClusterV3MastersList(this, "masters", false);
  public get masters() {
    return this._masters;
  }
  public putMasters(value: CceClusterV3Masters[] | cdktf.IResolvable) {
    this._masters.internalValue = value;
  }
  public resetMasters() {
    this._masters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mastersInput() {
    return this._masters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CceClusterV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CceClusterV3Timeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      api_access_trustlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiAccessTrustlist),
      authenticating_proxy_ca: cdktf.stringToTerraform(this._authenticatingProxyCa),
      authentication_mode: cdktf.stringToTerraform(this._authenticationMode),
      billing_mode: cdktf.numberToTerraform(this._billingMode),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      container_network_cidr: cdktf.stringToTerraform(this._containerNetworkCidr),
      container_network_type: cdktf.stringToTerraform(this._containerNetworkType),
      custom_san: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customSan),
      delete_all_network: cdktf.stringToTerraform(this._deleteAllNetwork),
      delete_all_storage: cdktf.stringToTerraform(this._deleteAllStorage),
      delete_efs: cdktf.stringToTerraform(this._deleteEfs),
      delete_eni: cdktf.stringToTerraform(this._deleteEni),
      delete_evs: cdktf.stringToTerraform(this._deleteEvs),
      delete_net: cdktf.stringToTerraform(this._deleteNet),
      delete_obs: cdktf.stringToTerraform(this._deleteObs),
      delete_sfs: cdktf.stringToTerraform(this._deleteSfs),
      description: cdktf.stringToTerraform(this._description),
      eip: cdktf.stringToTerraform(this._eip),
      enable_volume_encryption: cdktf.booleanToTerraform(this._enableVolumeEncryption),
      eni_subnet_cidr: cdktf.stringToTerraform(this._eniSubnetCidr),
      eni_subnet_id: cdktf.stringToTerraform(this._eniSubnetId),
      extend_param: cdktf.hashMapper(cdktf.stringToTerraform)(this._extendParam),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      highway_subnet_id: cdktf.stringToTerraform(this._highwaySubnetId),
      id: cdktf.stringToTerraform(this._id),
      ignore_addons: cdktf.booleanToTerraform(this._ignoreAddons),
      ignore_certificate_clusters_data: cdktf.booleanToTerraform(this._ignoreCertificateClustersData),
      ignore_certificate_users_data: cdktf.booleanToTerraform(this._ignoreCertificateUsersData),
      ipv6_enable: cdktf.booleanToTerraform(this._ipv6Enable),
      kube_proxy_mode: cdktf.stringToTerraform(this._kubeProxyMode),
      kubernetes_svc_ip_range: cdktf.stringToTerraform(this._kubernetesSvcIpRange),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      name: cdktf.stringToTerraform(this._name),
      no_addons: cdktf.booleanToTerraform(this._noAddons),
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      support_istio: cdktf.booleanToTerraform(this._supportIstio),
      timezone: cdktf.stringToTerraform(this._timezone),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      authenticating_proxy: cceClusterV3AuthenticatingProxyToTerraform(this._authenticatingProxy.internalValue),
      component_configurations: cdktf.listMapper(cceClusterV3ComponentConfigurationsToTerraform, true)(this._componentConfigurations.internalValue),
      masters: cdktf.listMapper(cceClusterV3MastersToTerraform, true)(this._masters.internalValue),
      timeouts: cceClusterV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      api_access_trustlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiAccessTrustlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      authenticating_proxy_ca: {
        value: cdktf.stringToHclTerraform(this._authenticatingProxyCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_mode: {
        value: cdktf.stringToHclTerraform(this._authenticationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_mode: {
        value: cdktf.numberToHclTerraform(this._billingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_network_cidr: {
        value: cdktf.stringToHclTerraform(this._containerNetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_network_type: {
        value: cdktf.stringToHclTerraform(this._containerNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_san: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customSan),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      delete_all_network: {
        value: cdktf.stringToHclTerraform(this._deleteAllNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_all_storage: {
        value: cdktf.stringToHclTerraform(this._deleteAllStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_efs: {
        value: cdktf.stringToHclTerraform(this._deleteEfs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_eni: {
        value: cdktf.stringToHclTerraform(this._deleteEni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_evs: {
        value: cdktf.stringToHclTerraform(this._deleteEvs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_net: {
        value: cdktf.stringToHclTerraform(this._deleteNet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_obs: {
        value: cdktf.stringToHclTerraform(this._deleteObs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_sfs: {
        value: cdktf.stringToHclTerraform(this._deleteSfs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip: {
        value: cdktf.stringToHclTerraform(this._eip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_volume_encryption: {
        value: cdktf.booleanToHclTerraform(this._enableVolumeEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eni_subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._eniSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eni_subnet_id: {
        value: cdktf.stringToHclTerraform(this._eniSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extend_param: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extendParam),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      highway_subnet_id: {
        value: cdktf.stringToHclTerraform(this._highwaySubnetId),
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
      ignore_addons: {
        value: cdktf.booleanToHclTerraform(this._ignoreAddons),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_certificate_clusters_data: {
        value: cdktf.booleanToHclTerraform(this._ignoreCertificateClustersData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_certificate_users_data: {
        value: cdktf.booleanToHclTerraform(this._ignoreCertificateUsersData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kube_proxy_mode: {
        value: cdktf.stringToHclTerraform(this._kubeProxyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_svc_ip_range: {
        value: cdktf.stringToHclTerraform(this._kubernetesSvcIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      multi_az: {
        value: cdktf.booleanToHclTerraform(this._multiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_addons: {
        value: cdktf.booleanToHclTerraform(this._noAddons),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_istio: {
        value: cdktf.booleanToHclTerraform(this._supportIstio),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticating_proxy: {
        value: cceClusterV3AuthenticatingProxyToHclTerraform(this._authenticatingProxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CceClusterV3AuthenticatingProxyList",
      },
      component_configurations: {
        value: cdktf.listMapperHcl(cceClusterV3ComponentConfigurationsToHclTerraform, true)(this._componentConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CceClusterV3ComponentConfigurationsList",
      },
      masters: {
        value: cdktf.listMapperHcl(cceClusterV3MastersToHclTerraform, true)(this._masters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CceClusterV3MastersList",
      },
      timeouts: {
        value: cceClusterV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CceClusterV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
