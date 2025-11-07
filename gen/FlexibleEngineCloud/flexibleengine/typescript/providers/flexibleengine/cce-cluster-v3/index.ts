// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CceClusterV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}
  */
  readonly authenticatingProxyCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}
  */
  readonly billingMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}
  */
  readonly containerNetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}
  */
  readonly containerNetworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#custom_san CceClusterV3#custom_san}
  */
  readonly customSan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#description CceClusterV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}
  */
  readonly eip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}
  */
  readonly extendParam?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#hibernate CceClusterV3#hibernate}
  */
  readonly hibernate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}
  */
  readonly highwaySubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#id CceClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}
  */
  readonly kubeProxyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#name CceClusterV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#region CceClusterV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#service_network_cidr CceClusterV3#service_network_cidr}
  */
  readonly serviceNetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}
  */
  readonly vpcId: string;
  /**
  * masters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#masters CceClusterV3#masters}
  */
  readonly masters?: CceClusterV3Masters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#timeouts CceClusterV3#timeouts}
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
export interface CceClusterV3Masters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#availability_zone CceClusterV3#availability_zone}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#create CceClusterV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#delete CceClusterV3#delete}
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3 flexibleengine_cce_cluster_v3}
*/
export class CceClusterV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_cce_cluster_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CceClusterV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CceClusterV3 to import
  * @param importFromId The id of the existing CceClusterV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CceClusterV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_cce_cluster_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/cce_cluster_v3 flexibleengine_cce_cluster_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CceClusterV3Config
  */
  public constructor(scope: Construct, id: string, config: CceClusterV3Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_cce_cluster_v3',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
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
    this._authenticatingProxyCa = config.authenticatingProxyCa;
    this._authenticationMode = config.authenticationMode;
    this._billingMode = config.billingMode;
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._containerNetworkCidr = config.containerNetworkCidr;
    this._containerNetworkType = config.containerNetworkType;
    this._customSan = config.customSan;
    this._description = config.description;
    this._eip = config.eip;
    this._extendParam = config.extendParam;
    this._flavorId = config.flavorId;
    this._hibernate = config.hibernate;
    this._highwaySubnetId = config.highwaySubnetId;
    this._id = config.id;
    this._kubeProxyMode = config.kubeProxyMode;
    this._labels = config.labels;
    this._name = config.name;
    this._region = config.region;
    this._serviceNetworkCidr = config.serviceNetworkCidr;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
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

  // external_apig_endpoint - computed: true, optional: false, required: false
  public get externalApigEndpoint() {
    return this.getStringAttribute('external_apig_endpoint');
  }

  // external_endpoint - computed: true, optional: false, required: false
  public get externalEndpoint() {
    return this.getStringAttribute('external_endpoint');
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

  // hibernate - computed: false, optional: true, required: false
  private _hibernate?: boolean | cdktf.IResolvable; 
  public get hibernate() {
    return this.getBooleanAttribute('hibernate');
  }
  public set hibernate(value: boolean | cdktf.IResolvable) {
    this._hibernate = value;
  }
  public resetHibernate() {
    this._hibernate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernateInput() {
    return this._hibernate;
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

  // internal_endpoint - computed: true, optional: false, required: false
  public get internalEndpoint() {
    return this.getStringAttribute('internal_endpoint');
  }

  // kube_proxy_mode - computed: false, optional: true, required: false
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

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // service_network_cidr - computed: true, optional: true, required: false
  private _serviceNetworkCidr?: string; 
  public get serviceNetworkCidr() {
    return this.getStringAttribute('service_network_cidr');
  }
  public set serviceNetworkCidr(value: string) {
    this._serviceNetworkCidr = value;
  }
  public resetServiceNetworkCidr() {
    this._serviceNetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkCidrInput() {
    return this._serviceNetworkCidr;
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
      authenticating_proxy_ca: cdktf.stringToTerraform(this._authenticatingProxyCa),
      authentication_mode: cdktf.stringToTerraform(this._authenticationMode),
      billing_mode: cdktf.numberToTerraform(this._billingMode),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      container_network_cidr: cdktf.stringToTerraform(this._containerNetworkCidr),
      container_network_type: cdktf.stringToTerraform(this._containerNetworkType),
      custom_san: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customSan),
      description: cdktf.stringToTerraform(this._description),
      eip: cdktf.stringToTerraform(this._eip),
      extend_param: cdktf.hashMapper(cdktf.stringToTerraform)(this._extendParam),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      hibernate: cdktf.booleanToTerraform(this._hibernate),
      highway_subnet_id: cdktf.stringToTerraform(this._highwaySubnetId),
      id: cdktf.stringToTerraform(this._id),
      kube_proxy_mode: cdktf.stringToTerraform(this._kubeProxyMode),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      service_network_cidr: cdktf.stringToTerraform(this._serviceNetworkCidr),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
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
      hibernate: {
        value: cdktf.booleanToHclTerraform(this._hibernate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      kube_proxy_mode: {
        value: cdktf.stringToHclTerraform(this._kubeProxyMode),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_network_cidr: {
        value: cdktf.stringToHclTerraform(this._serviceNetworkCidr),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
