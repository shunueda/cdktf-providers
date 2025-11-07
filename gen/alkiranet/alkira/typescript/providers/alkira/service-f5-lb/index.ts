// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceF5LbConfig extends cdktf.TerraformMetaArguments {
  /**
  * IDs of billing tags to associate with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#billing_tag_ids ServiceF5Lb#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * CXP on which the service should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#cxp ServiceF5Lb#cxp}
  */
  readonly cxp: string;
  /**
  * Description of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#description ServiceF5Lb#description}
  */
  readonly description?: string;
  /**
  * ID of global CIDR list from which subnets will be allocated for the external network interfaces of instances. These interfaces host the public IP addresses needed for virtual IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#global_cidr_list_id ServiceF5Lb#global_cidr_list_id}
  */
  readonly globalCidrListId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#id ServiceF5Lb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#name ServiceF5Lb#name}
  */
  readonly name: string;
  /**
  * ID of prefix list to use for IP allowlist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#prefix_list_id ServiceF5Lb#prefix_list_id}
  */
  readonly prefixListId?: number;
  /**
  * IDs of segments associated with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#segment_ids ServiceF5Lb#segment_ids}
  */
  readonly segmentIds: string[];
  /**
  * Name of the service group to be associated with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#service_group_name ServiceF5Lb#service_group_name}
  */
  readonly serviceGroupName: string;
  /**
  * Size of the service, one of `SMALL`, `MEDIUM`, `LARGE` `2LARGE`, `5LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#size ServiceF5Lb#size}
  */
  readonly size: string;
  /**
  * instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#instance ServiceF5Lb#instance}
  */
  readonly instance: ServiceF5LbInstance[] | cdktf.IResolvable;
  /**
  * segment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#segment_options ServiceF5Lb#segment_options}
  */
  readonly segmentOptions: ServiceF5LbSegmentOptions[] | cdktf.IResolvable;
}
export interface ServiceF5LbInstance {
  /**
  * ID of the F5 load balancer credential. If the `credential_id` is not passed, `f5_username` and `f5_password` is required to create new credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#credential_id ServiceF5Lb#credential_id}
  */
  readonly credentialId?: string;
  /**
  * The deployment type used for the F5 load balancer instance.The value could be one of `GOOD`, `BETTER`, `BEST` or `LTM_DNS`. Type `GOOD`, `BETTER` and `BEST` is only applicable when `license_type` is `PAY_AS_YOU_GO`. `LTM_DNS` is only applicable when `license_type` `BRING_YOUR_OWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#deployment_type ServiceF5Lb#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * Password for the F5 load balancer. This can also be set by `ALKIRA_F5_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#f5_password ServiceF5Lb#f5_password}
  */
  readonly f5Password?: string;
  /**
  * Registration key for the F5 load balancer. Only required if `license_type` is `BRING_YOUR_OWN`. This can also be set by `ALKIRA_F5_REGISTRATION_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#f5_registration_key ServiceF5Lb#f5_registration_key}
  */
  readonly f5RegistrationKey?: string;
  /**
  * Username for the F5 load balancer. Username is `admin` for AWS CXP and `akadmin`  for Azure CXP any other value will be rejected. This can also be set by `ALKIRA_F5_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#f5_username ServiceF5Lb#f5_username}
  */
  readonly f5Username?: string;
  /**
  * The FQDN defined in route 53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#hostname_fqdn ServiceF5Lb#hostname_fqdn}
  */
  readonly hostnameFqdn: string;
  /**
  * The type of license used for the F5 load balancer instance. Can be one of `BRING_YOUR_OWN` or `PAY_AS_YOU_GO`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#license_type ServiceF5Lb#license_type}
  */
  readonly licenseType: string;
  /**
  * Name of the F5 load balancer instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#name ServiceF5Lb#name}
  */
  readonly name: string;
  /**
  * ID of the F5 load balancer registration credential. If the `registration_credential_id` is not passed, `f5_registration_key` is required to create new credentials. Only required if `license_type` is `BRING_YOUR_OWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#registration_credential_id ServiceF5Lb#registration_credential_id}
  */
  readonly registrationCredentialId?: string;
  /**
  * The version of the F5 load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#version ServiceF5Lb#version}
  */
  readonly version: string;
}

export function serviceF5LbInstanceToTerraform(struct?: ServiceF5LbInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_id: cdktf.stringToTerraform(struct!.credentialId),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    f5_password: cdktf.stringToTerraform(struct!.f5Password),
    f5_registration_key: cdktf.stringToTerraform(struct!.f5RegistrationKey),
    f5_username: cdktf.stringToTerraform(struct!.f5Username),
    hostname_fqdn: cdktf.stringToTerraform(struct!.hostnameFqdn),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    name: cdktf.stringToTerraform(struct!.name),
    registration_credential_id: cdktf.stringToTerraform(struct!.registrationCredentialId),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function serviceF5LbInstanceToHclTerraform(struct?: ServiceF5LbInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    f5_password: {
      value: cdktf.stringToHclTerraform(struct!.f5Password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    f5_registration_key: {
      value: cdktf.stringToHclTerraform(struct!.f5RegistrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    f5_username: {
      value: cdktf.stringToHclTerraform(struct!.f5Username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.hostnameFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.registrationCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceF5LbInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceF5LbInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialId = this._credentialId;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._f5Password !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5Password = this._f5Password;
    }
    if (this._f5RegistrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5RegistrationKey = this._f5RegistrationKey;
    }
    if (this._f5Username !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5Username = this._f5Username;
    }
    if (this._hostnameFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameFqdn = this._hostnameFqdn;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._registrationCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationCredentialId = this._registrationCredentialId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceF5LbInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialId = undefined;
      this._deploymentType = undefined;
      this._f5Password = undefined;
      this._f5RegistrationKey = undefined;
      this._f5Username = undefined;
      this._hostnameFqdn = undefined;
      this._licenseType = undefined;
      this._name = undefined;
      this._registrationCredentialId = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialId = value.credentialId;
      this._deploymentType = value.deploymentType;
      this._f5Password = value.f5Password;
      this._f5RegistrationKey = value.f5RegistrationKey;
      this._f5Username = value.f5Username;
      this._hostnameFqdn = value.hostnameFqdn;
      this._licenseType = value.licenseType;
      this._name = value.name;
      this._registrationCredentialId = value.registrationCredentialId;
      this._version = value.version;
    }
  }

  // credential_id - computed: true, optional: true, required: false
  private _credentialId?: string; 
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }
  public set credentialId(value: string) {
    this._credentialId = value;
  }
  public resetCredentialId() {
    this._credentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // f5_password - computed: false, optional: true, required: false
  private _f5Password?: string; 
  public get f5Password() {
    return this.getStringAttribute('f5_password');
  }
  public set f5Password(value: string) {
    this._f5Password = value;
  }
  public resetF5Password() {
    this._f5Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5PasswordInput() {
    return this._f5Password;
  }

  // f5_registration_key - computed: false, optional: true, required: false
  private _f5RegistrationKey?: string; 
  public get f5RegistrationKey() {
    return this.getStringAttribute('f5_registration_key');
  }
  public set f5RegistrationKey(value: string) {
    this._f5RegistrationKey = value;
  }
  public resetF5RegistrationKey() {
    this._f5RegistrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5RegistrationKeyInput() {
    return this._f5RegistrationKey;
  }

  // f5_username - computed: false, optional: true, required: false
  private _f5Username?: string; 
  public get f5Username() {
    return this.getStringAttribute('f5_username');
  }
  public set f5Username(value: string) {
    this._f5Username = value;
  }
  public resetF5Username() {
    this._f5Username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5UsernameInput() {
    return this._f5Username;
  }

  // hostname_fqdn - computed: false, optional: false, required: true
  private _hostnameFqdn?: string; 
  public get hostnameFqdn() {
    return this.getStringAttribute('hostname_fqdn');
  }
  public set hostnameFqdn(value: string) {
    this._hostnameFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameFqdnInput() {
    return this._hostnameFqdn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
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

  // registration_credential_id - computed: true, optional: true, required: false
  private _registrationCredentialId?: string; 
  public get registrationCredentialId() {
    return this.getStringAttribute('registration_credential_id');
  }
  public set registrationCredentialId(value: string) {
    this._registrationCredentialId = value;
  }
  public resetRegistrationCredentialId() {
    this._registrationCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationCredentialIdInput() {
    return this._registrationCredentialId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ServiceF5LbInstanceList extends cdktf.ComplexList {
  public internalValue? : ServiceF5LbInstance[] | cdktf.IResolvable

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
  public get(index: number): ServiceF5LbInstanceOutputReference {
    return new ServiceF5LbInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceF5LbSegmentOptions {
  /**
  * Number of NICs to allocate for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#elb_nic_count ServiceF5Lb#elb_nic_count}
  */
  readonly elbNicCount: number;
  /**
  * ID of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#segment_id ServiceF5Lb#segment_id}
  */
  readonly segmentId: string;
}

export function serviceF5LbSegmentOptionsToTerraform(struct?: ServiceF5LbSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elb_nic_count: cdktf.numberToTerraform(struct!.elbNicCount),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
  }
}


export function serviceF5LbSegmentOptionsToHclTerraform(struct?: ServiceF5LbSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elb_nic_count: {
      value: cdktf.numberToHclTerraform(struct!.elbNicCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceF5LbSegmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceF5LbSegmentOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elbNicCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.elbNicCount = this._elbNicCount;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceF5LbSegmentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elbNicCount = undefined;
      this._segmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elbNicCount = value.elbNicCount;
      this._segmentId = value.segmentId;
    }
  }

  // elb_nic_count - computed: false, optional: false, required: true
  private _elbNicCount?: number; 
  public get elbNicCount() {
    return this.getNumberAttribute('elb_nic_count');
  }
  public set elbNicCount(value: number) {
    this._elbNicCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elbNicCountInput() {
    return this._elbNicCount;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }
}

export class ServiceF5LbSegmentOptionsList extends cdktf.ComplexList {
  public internalValue? : ServiceF5LbSegmentOptions[] | cdktf.IResolvable

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
  public get(index: number): ServiceF5LbSegmentOptionsOutputReference {
    return new ServiceF5LbSegmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb alkira_service_f5_lb}
*/
export class ServiceF5Lb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_service_f5_lb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceF5Lb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceF5Lb to import
  * @param importFromId The id of the existing ServiceF5Lb that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceF5Lb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_service_f5_lb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_lb alkira_service_f5_lb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceF5LbConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceF5LbConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_service_f5_lb',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingTagIds = config.billingTagIds;
    this._cxp = config.cxp;
    this._description = config.description;
    this._globalCidrListId = config.globalCidrListId;
    this._id = config.id;
    this._name = config.name;
    this._prefixListId = config.prefixListId;
    this._segmentIds = config.segmentIds;
    this._serviceGroupName = config.serviceGroupName;
    this._size = config.size;
    this._instance.internalValue = config.instance;
    this._segmentOptions.internalValue = config.segmentOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
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

  // global_cidr_list_id - computed: false, optional: false, required: true
  private _globalCidrListId?: number; 
  public get globalCidrListId() {
    return this.getNumberAttribute('global_cidr_list_id');
  }
  public set globalCidrListId(value: number) {
    this._globalCidrListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCidrListIdInput() {
    return this._globalCidrListId;
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

  // implicit_group_id - computed: true, optional: false, required: false
  public get implicitGroupId() {
    return this.getNumberAttribute('implicit_group_id');
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

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: number; 
  public get prefixListId() {
    return this.getNumberAttribute('prefix_list_id');
  }
  public set prefixListId(value: number) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // segment_ids - computed: false, optional: false, required: true
  private _segmentIds?: string[]; 
  public get segmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('segment_ids'));
  }
  public set segmentIds(value: string[]) {
    this._segmentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdsInput() {
    return this._segmentIds;
  }

  // service_group_name - computed: false, optional: false, required: true
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // instance - computed: false, optional: false, required: true
  private _instance = new ServiceF5LbInstanceList(this, "instance", false);
  public get instance() {
    return this._instance;
  }
  public putInstance(value: ServiceF5LbInstance[] | cdktf.IResolvable) {
    this._instance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // segment_options - computed: false, optional: false, required: true
  private _segmentOptions = new ServiceF5LbSegmentOptionsList(this, "segment_options", true);
  public get segmentOptions() {
    return this._segmentOptions;
  }
  public putSegmentOptions(value: ServiceF5LbSegmentOptions[] | cdktf.IResolvable) {
    this._segmentOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOptionsInput() {
    return this._segmentOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      global_cidr_list_id: cdktf.numberToTerraform(this._globalCidrListId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      prefix_list_id: cdktf.numberToTerraform(this._prefixListId),
      segment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._segmentIds),
      service_group_name: cdktf.stringToTerraform(this._serviceGroupName),
      size: cdktf.stringToTerraform(this._size),
      instance: cdktf.listMapper(serviceF5LbInstanceToTerraform, true)(this._instance.internalValue),
      segment_options: cdktf.listMapper(serviceF5LbSegmentOptionsToTerraform, true)(this._segmentOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._billingTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
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
      global_cidr_list_id: {
        value: cdktf.numberToHclTerraform(this._globalCidrListId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_id: {
        value: cdktf.numberToHclTerraform(this._prefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      segment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._segmentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_group_name: {
        value: cdktf.stringToHclTerraform(this._serviceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.listMapperHcl(serviceF5LbInstanceToHclTerraform, true)(this._instance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceF5LbInstanceList",
      },
      segment_options: {
        value: cdktf.listMapperHcl(serviceF5LbSegmentOptionsToHclTerraform, true)(this._segmentOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceF5LbSegmentOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
