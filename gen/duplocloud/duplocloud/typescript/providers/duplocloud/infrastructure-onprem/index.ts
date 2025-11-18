// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfrastructureOnpremConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cloud account ID. Used with GCP cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#account_id InfrastructureOnprem#account_id}
  */
  readonly accountId?: string;
  /**
  * Token to access cluster API's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#api_token InfrastructureOnprem#api_token}
  */
  readonly apiToken: string;
  /**
  * The number of availability zones.  Must be one of: `2`, `3`, or `4`. This is applicable only for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#azcount InfrastructureOnprem#azcount}
  */
  readonly azcount?: number;
  /**
  * Required to validate API server certificates and kubelet client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#cluster_certificate_authority_data InfrastructureOnprem#cluster_certificate_authority_data}
  */
  readonly clusterCertificateAuthorityData: string;
  /**
  * Endpoint URL of K8 cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#cluster_endpoint InfrastructureOnprem#cluster_endpoint}
  */
  readonly clusterEndpoint: string;
  /**
  * Name of the on premise k8 cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#cluster_name InfrastructureOnprem#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Datacenter name of the onpremise cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#data_center InfrastructureOnprem#data_center}
  */
  readonly dataCenter: string;
  /**
  * Whether or not to provision a kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#enable_k8_cluster InfrastructureOnprem#enable_k8_cluster}
  */
  readonly enableK8Cluster: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#id InfrastructureOnprem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the infrastructure.  Infrastructure names are globally unique and less than 13 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#infra_name InfrastructureOnprem#infra_name}
  */
  readonly infraName: string;
  /**
  * The cloud provider region.  The Duplo portal must have already been configured to support this region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#region InfrastructureOnprem#region}
  */
  readonly region: string;
  /**
  * Type of on premise vendor <br>0 - Rancher<br>1 - Generic<br>2 - EKS<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#vendor InfrastructureOnprem#vendor}
  */
  readonly vendor: number;
  /**
  * custom_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#custom_data InfrastructureOnprem#custom_data}
  */
  readonly customData?: InfrastructureOnpremCustomData[] | cdktf.IResolvable;
  /**
  * eks_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#eks_config InfrastructureOnprem#eks_config}
  */
  readonly eksConfig?: InfrastructureOnpremEksConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#timeouts InfrastructureOnprem#timeouts}
  */
  readonly timeouts?: InfrastructureOnpremTimeouts;
}
export interface InfrastructureOnpremCustomData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#key InfrastructureOnprem#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#value InfrastructureOnprem#value}
  */
  readonly value: string;
}

export function infrastructureOnpremCustomDataToTerraform(struct?: InfrastructureOnpremCustomData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function infrastructureOnpremCustomDataToHclTerraform(struct?: InfrastructureOnpremCustomData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class InfrastructureOnpremCustomDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructureOnpremCustomData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureOnpremCustomData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class InfrastructureOnpremCustomDataList extends cdktf.ComplexList {
  public internalValue? : InfrastructureOnpremCustomData[] | cdktf.IResolvable

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
  public get(index: number): InfrastructureOnpremCustomDataOutputReference {
    return new InfrastructureOnpremCustomDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructureOnpremEksConfig {
  /**
  * The security group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#ingress_security_group_ids InfrastructureOnprem#ingress_security_group_ids}
  */
  readonly ingressSecurityGroupIds: string[];
  /**
  * The private subnets for the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#private_subnets InfrastructureOnprem#private_subnets}
  */
  readonly privateSubnets: string[];
  /**
  * The public subnets for the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#public_subnets InfrastructureOnprem#public_subnets}
  */
  readonly publicSubnets: string[];
  /**
  * The the ID of a Virtual Private Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#vpc_id InfrastructureOnprem#vpc_id}
  */
  readonly vpcId: string;
}

export function infrastructureOnpremEksConfigToTerraform(struct?: InfrastructureOnpremEksConfigOutputReference | InfrastructureOnpremEksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ingressSecurityGroupIds),
    private_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateSubnets),
    public_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicSubnets),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function infrastructureOnpremEksConfigToHclTerraform(struct?: InfrastructureOnpremEksConfigOutputReference | InfrastructureOnpremEksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ingressSecurityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    public_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publicSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureOnpremEksConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureOnpremEksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressSecurityGroupIds = this._ingressSecurityGroupIds;
    }
    if (this._privateSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateSubnets = this._privateSubnets;
    }
    if (this._publicSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicSubnets = this._publicSubnets;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureOnpremEksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ingressSecurityGroupIds = undefined;
      this._privateSubnets = undefined;
      this._publicSubnets = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ingressSecurityGroupIds = value.ingressSecurityGroupIds;
      this._privateSubnets = value.privateSubnets;
      this._publicSubnets = value.publicSubnets;
      this._vpcId = value.vpcId;
    }
  }

  // ingress_security_group_ids - computed: false, optional: false, required: true
  private _ingressSecurityGroupIds?: string[]; 
  public get ingressSecurityGroupIds() {
    return this.getListAttribute('ingress_security_group_ids');
  }
  public set ingressSecurityGroupIds(value: string[]) {
    this._ingressSecurityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSecurityGroupIdsInput() {
    return this._ingressSecurityGroupIds;
  }

  // private_subnets - computed: false, optional: false, required: true
  private _privateSubnets?: string[]; 
  public get privateSubnets() {
    return this.getListAttribute('private_subnets');
  }
  public set privateSubnets(value: string[]) {
    this._privateSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetsInput() {
    return this._privateSubnets;
  }

  // public_subnets - computed: false, optional: false, required: true
  private _publicSubnets?: string[]; 
  public get publicSubnets() {
    return this.getListAttribute('public_subnets');
  }
  public set publicSubnets(value: string[]) {
    this._publicSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetsInput() {
    return this._publicSubnets;
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
}
export interface InfrastructureOnpremTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#create InfrastructureOnprem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#delete InfrastructureOnprem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#update InfrastructureOnprem#update}
  */
  readonly update?: string;
}

export function infrastructureOnpremTimeoutsToTerraform(struct?: InfrastructureOnpremTimeouts | cdktf.IResolvable): any {
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


export function infrastructureOnpremTimeoutsToHclTerraform(struct?: InfrastructureOnpremTimeouts | cdktf.IResolvable): any {
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

export class InfrastructureOnpremTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InfrastructureOnpremTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InfrastructureOnpremTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem duplocloud_infrastructure_onprem}
*/
export class InfrastructureOnprem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_infrastructure_onprem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InfrastructureOnprem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InfrastructureOnprem to import
  * @param importFromId The id of the existing InfrastructureOnprem that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InfrastructureOnprem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_infrastructure_onprem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/infrastructure_onprem duplocloud_infrastructure_onprem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfrastructureOnpremConfig
  */
  public constructor(scope: Construct, id: string, config: InfrastructureOnpremConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_infrastructure_onprem',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.29',
        providerVersionConstraint: '0.11.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._apiToken = config.apiToken;
    this._azcount = config.azcount;
    this._clusterCertificateAuthorityData = config.clusterCertificateAuthorityData;
    this._clusterEndpoint = config.clusterEndpoint;
    this._clusterName = config.clusterName;
    this._dataCenter = config.dataCenter;
    this._enableK8Cluster = config.enableK8Cluster;
    this._id = config.id;
    this._infraName = config.infraName;
    this._region = config.region;
    this._vendor = config.vendor;
    this._customData.internalValue = config.customData;
    this._eksConfig.internalValue = config.eksConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // azcount - computed: false, optional: true, required: false
  private _azcount?: number; 
  public get azcount() {
    return this.getNumberAttribute('azcount');
  }
  public set azcount(value: number) {
    this._azcount = value;
  }
  public resetAzcount() {
    this._azcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azcountInput() {
    return this._azcount;
  }

  // cluster_certificate_authority_data - computed: false, optional: false, required: true
  private _clusterCertificateAuthorityData?: string; 
  public get clusterCertificateAuthorityData() {
    return this.getStringAttribute('cluster_certificate_authority_data');
  }
  public set clusterCertificateAuthorityData(value: string) {
    this._clusterCertificateAuthorityData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCertificateAuthorityDataInput() {
    return this._clusterCertificateAuthorityData;
  }

  // cluster_endpoint - computed: false, optional: false, required: true
  private _clusterEndpoint?: string; 
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }
  public set clusterEndpoint(value: string) {
    this._clusterEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointInput() {
    return this._clusterEndpoint;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // data_center - computed: false, optional: false, required: true
  private _dataCenter?: string; 
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }
  public set dataCenter(value: string) {
    this._dataCenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterInput() {
    return this._dataCenter;
  }

  // enable_k8_cluster - computed: false, optional: false, required: true
  private _enableK8Cluster?: boolean | cdktf.IResolvable; 
  public get enableK8Cluster() {
    return this.getBooleanAttribute('enable_k8_cluster');
  }
  public set enableK8Cluster(value: boolean | cdktf.IResolvable) {
    this._enableK8Cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableK8ClusterInput() {
    return this._enableK8Cluster;
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

  // infra_name - computed: false, optional: false, required: true
  private _infraName?: string; 
  public get infraName() {
    return this.getStringAttribute('infra_name');
  }
  public set infraName(value: string) {
    this._infraName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraNameInput() {
    return this._infraName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vendor - computed: false, optional: false, required: true
  private _vendor?: number; 
  public get vendor() {
    return this.getNumberAttribute('vendor');
  }
  public set vendor(value: number) {
    this._vendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData = new InfrastructureOnpremCustomDataList(this, "custom_data", false);
  public get customData() {
    return this._customData;
  }
  public putCustomData(value: InfrastructureOnpremCustomData[] | cdktf.IResolvable) {
    this._customData.internalValue = value;
  }
  public resetCustomData() {
    this._customData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData.internalValue;
  }

  // eks_config - computed: false, optional: true, required: false
  private _eksConfig = new InfrastructureOnpremEksConfigOutputReference(this, "eks_config");
  public get eksConfig() {
    return this._eksConfig;
  }
  public putEksConfig(value: InfrastructureOnpremEksConfig) {
    this._eksConfig.internalValue = value;
  }
  public resetEksConfig() {
    this._eksConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksConfigInput() {
    return this._eksConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InfrastructureOnpremTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InfrastructureOnpremTimeouts) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      api_token: cdktf.stringToTerraform(this._apiToken),
      azcount: cdktf.numberToTerraform(this._azcount),
      cluster_certificate_authority_data: cdktf.stringToTerraform(this._clusterCertificateAuthorityData),
      cluster_endpoint: cdktf.stringToTerraform(this._clusterEndpoint),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      data_center: cdktf.stringToTerraform(this._dataCenter),
      enable_k8_cluster: cdktf.booleanToTerraform(this._enableK8Cluster),
      id: cdktf.stringToTerraform(this._id),
      infra_name: cdktf.stringToTerraform(this._infraName),
      region: cdktf.stringToTerraform(this._region),
      vendor: cdktf.numberToTerraform(this._vendor),
      custom_data: cdktf.listMapper(infrastructureOnpremCustomDataToTerraform, true)(this._customData.internalValue),
      eks_config: infrastructureOnpremEksConfigToTerraform(this._eksConfig.internalValue),
      timeouts: infrastructureOnpremTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azcount: {
        value: cdktf.numberToHclTerraform(this._azcount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_certificate_authority_data: {
        value: cdktf.stringToHclTerraform(this._clusterCertificateAuthorityData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._clusterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_center: {
        value: cdktf.stringToHclTerraform(this._dataCenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_k8_cluster: {
        value: cdktf.booleanToHclTerraform(this._enableK8Cluster),
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
      infra_name: {
        value: cdktf.stringToHclTerraform(this._infraName),
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
      vendor: {
        value: cdktf.numberToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_data: {
        value: cdktf.listMapperHcl(infrastructureOnpremCustomDataToHclTerraform, true)(this._customData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureOnpremCustomDataList",
      },
      eks_config: {
        value: infrastructureOnpremEksConfigToHclTerraform(this._eksConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureOnpremEksConfigList",
      },
      timeouts: {
        value: infrastructureOnpremTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InfrastructureOnpremTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
