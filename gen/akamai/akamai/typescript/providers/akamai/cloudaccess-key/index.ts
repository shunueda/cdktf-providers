// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudaccessKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#access_key_name CloudaccessKey#access_key_name}
  */
  readonly accessKeyName: string;
  /**
  * The type of cloud provider signing process used to authenticate API requests. Three options are available: "AWS4_HMAC_SHA256", "GOOG4_HMAC_SHA256" or "AOS4_HMAC_SHA256".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#authentication_method CloudaccessKey#authentication_method}
  */
  readonly authenticationMethod: string;
  /**
  * The unique identifier for the contract assigned to the access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#contract_id CloudaccessKey#contract_id}
  */
  readonly contractId: string;
  /**
  * The combination of a `cloud_access_key_id` and a `cloud_secret_access_key` used to sign API requests. This pair can be identified as access key version. Access key can contain only two access key versions at specific time (defined as credentialsA and credentialsB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#credentials_a CloudaccessKey#credentials_a}
  */
  readonly credentialsA?: CloudaccessKeyCredentialsA;
  /**
  * The combination of a `cloud_access_key_id` and a `cloud_secret_access_key` used to sign API requests. This pair can be identified as access key version. Access key can contain only two access key versions at specific time (defined as credentialsA and credentialsB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#credentials_b CloudaccessKey#credentials_b}
  */
  readonly credentialsB?: CloudaccessKeyCredentialsB;
  /**
  * The unique identifier assigned to the access control group assigned to the access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#group_id CloudaccessKey#group_id}
  */
  readonly groupId: number;
  /**
  * The secure networks that you assigned the access key to during creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#network_configuration CloudaccessKey#network_configuration}
  */
  readonly networkConfiguration: CloudaccessKeyNetworkConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#timeouts CloudaccessKey#timeouts}
  */
  readonly timeouts?: CloudaccessKeyTimeouts;
}
export interface CloudaccessKeyCredentialsA {
  /**
  * Access key id from cloud provider which is used to sign API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#cloud_access_key_id CloudaccessKey#cloud_access_key_id}
  */
  readonly cloudAccessKeyId: string;
  /**
  * Cloud Access secret from cloud provider which is used to sign API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#cloud_secret_access_key CloudaccessKey#cloud_secret_access_key}
  */
  readonly cloudSecretAccessKey: string;
  /**
  * Boolean value which helps to define if credentials should be assigned to property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#primary_key CloudaccessKey#primary_key}
  */
  readonly primaryKey: boolean | cdktf.IResolvable;
}

export function cloudaccessKeyCredentialsAToTerraform(struct?: CloudaccessKeyCredentialsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_access_key_id: cdktf.stringToTerraform(struct!.cloudAccessKeyId),
    cloud_secret_access_key: cdktf.stringToTerraform(struct!.cloudSecretAccessKey),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}


export function cloudaccessKeyCredentialsAToHclTerraform(struct?: CloudaccessKeyCredentialsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.cloudSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudaccessKeyCredentialsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudaccessKeyCredentialsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccessKeyId = this._cloudAccessKeyId;
    }
    if (this._cloudSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSecretAccessKey = this._cloudSecretAccessKey;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccessKeyCredentialsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudAccessKeyId = undefined;
      this._cloudSecretAccessKey = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudAccessKeyId = value.cloudAccessKeyId;
      this._cloudSecretAccessKey = value.cloudSecretAccessKey;
      this._primaryKey = value.primaryKey;
    }
  }

  // cloud_access_key_id - computed: false, optional: false, required: true
  private _cloudAccessKeyId?: string; 
  public get cloudAccessKeyId() {
    return this.getStringAttribute('cloud_access_key_id');
  }
  public set cloudAccessKeyId(value: string) {
    this._cloudAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccessKeyIdInput() {
    return this._cloudAccessKeyId;
  }

  // cloud_secret_access_key - computed: false, optional: false, required: true
  private _cloudSecretAccessKey?: string; 
  public get cloudSecretAccessKey() {
    return this.getStringAttribute('cloud_secret_access_key');
  }
  public set cloudSecretAccessKey(value: string) {
    this._cloudSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSecretAccessKeyInput() {
    return this._cloudSecretAccessKey;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // version_guid - computed: true, optional: false, required: false
  public get versionGuid() {
    return this.getStringAttribute('version_guid');
  }
}
export interface CloudaccessKeyCredentialsB {
  /**
  * Access key id from cloud provider which is used to sign API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#cloud_access_key_id CloudaccessKey#cloud_access_key_id}
  */
  readonly cloudAccessKeyId: string;
  /**
  * Cloud Access secret from cloud provider which is used to sign API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#cloud_secret_access_key CloudaccessKey#cloud_secret_access_key}
  */
  readonly cloudSecretAccessKey: string;
  /**
  * Boolean value which helps to define if credentials should be assigned to property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#primary_key CloudaccessKey#primary_key}
  */
  readonly primaryKey: boolean | cdktf.IResolvable;
}

export function cloudaccessKeyCredentialsBToTerraform(struct?: CloudaccessKeyCredentialsB | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_access_key_id: cdktf.stringToTerraform(struct!.cloudAccessKeyId),
    cloud_secret_access_key: cdktf.stringToTerraform(struct!.cloudSecretAccessKey),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}


export function cloudaccessKeyCredentialsBToHclTerraform(struct?: CloudaccessKeyCredentialsB | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.cloudSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudaccessKeyCredentialsBOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudaccessKeyCredentialsB | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccessKeyId = this._cloudAccessKeyId;
    }
    if (this._cloudSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSecretAccessKey = this._cloudSecretAccessKey;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccessKeyCredentialsB | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudAccessKeyId = undefined;
      this._cloudSecretAccessKey = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudAccessKeyId = value.cloudAccessKeyId;
      this._cloudSecretAccessKey = value.cloudSecretAccessKey;
      this._primaryKey = value.primaryKey;
    }
  }

  // cloud_access_key_id - computed: false, optional: false, required: true
  private _cloudAccessKeyId?: string; 
  public get cloudAccessKeyId() {
    return this.getStringAttribute('cloud_access_key_id');
  }
  public set cloudAccessKeyId(value: string) {
    this._cloudAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccessKeyIdInput() {
    return this._cloudAccessKeyId;
  }

  // cloud_secret_access_key - computed: false, optional: false, required: true
  private _cloudSecretAccessKey?: string; 
  public get cloudSecretAccessKey() {
    return this.getStringAttribute('cloud_secret_access_key');
  }
  public set cloudSecretAccessKey(value: string) {
    this._cloudSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSecretAccessKeyInput() {
    return this._cloudSecretAccessKey;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // version_guid - computed: true, optional: false, required: false
  public get versionGuid() {
    return this.getStringAttribute('version_guid');
  }
}
export interface CloudaccessKeyNetworkConfiguration {
  /**
  * Additional type of the deployment network that the access key will be deployed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#additional_cdn CloudaccessKey#additional_cdn}
  */
  readonly additionalCdn?: string;
  /**
  * The API deploys the access key to this secure network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#security_network CloudaccessKey#security_network}
  */
  readonly securityNetwork: string;
}

export function cloudaccessKeyNetworkConfigurationToTerraform(struct?: CloudaccessKeyNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_cdn: cdktf.stringToTerraform(struct!.additionalCdn),
    security_network: cdktf.stringToTerraform(struct!.securityNetwork),
  }
}


export function cloudaccessKeyNetworkConfigurationToHclTerraform(struct?: CloudaccessKeyNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_cdn: {
      value: cdktf.stringToHclTerraform(struct!.additionalCdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_network: {
      value: cdktf.stringToHclTerraform(struct!.securityNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudaccessKeyNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudaccessKeyNetworkConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalCdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalCdn = this._additionalCdn;
    }
    if (this._securityNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityNetwork = this._securityNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccessKeyNetworkConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalCdn = undefined;
      this._securityNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalCdn = value.additionalCdn;
      this._securityNetwork = value.securityNetwork;
    }
  }

  // additional_cdn - computed: false, optional: true, required: false
  private _additionalCdn?: string; 
  public get additionalCdn() {
    return this.getStringAttribute('additional_cdn');
  }
  public set additionalCdn(value: string) {
    this._additionalCdn = value;
  }
  public resetAdditionalCdn() {
    this._additionalCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCdnInput() {
    return this._additionalCdn;
  }

  // security_network - computed: false, optional: false, required: true
  private _securityNetwork?: string; 
  public get securityNetwork() {
    return this.getStringAttribute('security_network');
  }
  public set securityNetwork(value: string) {
    this._securityNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityNetworkInput() {
    return this._securityNetwork;
  }
}
export interface CloudaccessKeyTimeouts {
  /**
  * Optional configurable resource create timeout. By default it's 60 minutes with 1 minute polling interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#create CloudaccessKey#create}
  */
  readonly create?: string;
  /**
  * Optional configurable resource delete timeout. By default it's 60 minutes with 1 minute polling interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#delete CloudaccessKey#delete}
  */
  readonly delete?: string;
  /**
  * Optional configurable resource update timeout. By default it's 60 minutes with 1 minute polling interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#update CloudaccessKey#update}
  */
  readonly update?: string;
}

export function cloudaccessKeyTimeoutsToTerraform(struct?: CloudaccessKeyTimeouts | cdktf.IResolvable): any {
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


export function cloudaccessKeyTimeoutsToHclTerraform(struct?: CloudaccessKeyTimeouts | cdktf.IResolvable): any {
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

export class CloudaccessKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudaccessKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudaccessKeyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key akamai_cloudaccess_key}
*/
export class CloudaccessKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudaccess_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudaccessKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudaccessKey to import
  * @param importFromId The id of the existing CloudaccessKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudaccessKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudaccess_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudaccess_key akamai_cloudaccess_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudaccessKeyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudaccessKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudaccess_key',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyName = config.accessKeyName;
    this._authenticationMethod = config.authenticationMethod;
    this._contractId = config.contractId;
    this._credentialsA.internalValue = config.credentialsA;
    this._credentialsB.internalValue = config.credentialsB;
    this._groupId = config.groupId;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_name - computed: false, optional: false, required: true
  private _accessKeyName?: string; 
  public get accessKeyName() {
    return this.getStringAttribute('access_key_name');
  }
  public set accessKeyName(value: string) {
    this._accessKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyNameInput() {
    return this._accessKeyName;
  }

  // access_key_uid - computed: true, optional: false, required: false
  public get accessKeyUid() {
    return this.getNumberAttribute('access_key_uid');
  }

  // authentication_method - computed: false, optional: false, required: true
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // credentials_a - computed: false, optional: true, required: false
  private _credentialsA = new CloudaccessKeyCredentialsAOutputReference(this, "credentials_a");
  public get credentialsA() {
    return this._credentialsA;
  }
  public putCredentialsA(value: CloudaccessKeyCredentialsA) {
    this._credentialsA.internalValue = value;
  }
  public resetCredentialsA() {
    this._credentialsA.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsAInput() {
    return this._credentialsA.internalValue;
  }

  // credentials_b - computed: false, optional: true, required: false
  private _credentialsB = new CloudaccessKeyCredentialsBOutputReference(this, "credentials_b");
  public get credentialsB() {
    return this._credentialsB;
  }
  public putCredentialsB(value: CloudaccessKeyCredentialsB) {
    this._credentialsB.internalValue = value;
  }
  public resetCredentialsB() {
    this._credentialsB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsBInput() {
    return this._credentialsB.internalValue;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new CloudaccessKeyNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: CloudaccessKeyNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // primary_guid - computed: true, optional: false, required: false
  public get primaryGuid() {
    return this.getStringAttribute('primary_guid');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudaccessKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudaccessKeyTimeouts) {
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
      access_key_name: cdktf.stringToTerraform(this._accessKeyName),
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      contract_id: cdktf.stringToTerraform(this._contractId),
      credentials_a: cloudaccessKeyCredentialsAToTerraform(this._credentialsA.internalValue),
      credentials_b: cloudaccessKeyCredentialsBToTerraform(this._credentialsB.internalValue),
      group_id: cdktf.numberToTerraform(this._groupId),
      network_configuration: cloudaccessKeyNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      timeouts: cloudaccessKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_name: {
        value: cdktf.stringToHclTerraform(this._accessKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_a: {
        value: cloudaccessKeyCredentialsAToHclTerraform(this._credentialsA.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudaccessKeyCredentialsA",
      },
      credentials_b: {
        value: cloudaccessKeyCredentialsBToHclTerraform(this._credentialsB.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudaccessKeyCredentialsB",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_configuration: {
        value: cloudaccessKeyNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudaccessKeyNetworkConfiguration",
      },
      timeouts: {
        value: cloudaccessKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudaccessKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
