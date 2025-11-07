// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudaccountAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#id CloudaccountAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#name CloudaccountAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#organizational_unit_id CloudaccountAws#organizational_unit_id}
  */
  readonly organizationalUnitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#vendor CloudaccountAws#vendor}
  */
  readonly vendor?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#credentials CloudaccountAws#credentials}
  */
  readonly credentials: CloudaccountAwsCredentials;
  /**
  * net_sec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#net_sec CloudaccountAws#net_sec}
  */
  readonly netSec?: CloudaccountAwsNetSec;
}
export interface CloudaccountAwsIamSafeRestrictedIamEntities {
}

export function cloudaccountAwsIamSafeRestrictedIamEntitiesToTerraform(struct?: CloudaccountAwsIamSafeRestrictedIamEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudaccountAwsIamSafeRestrictedIamEntitiesToHclTerraform(struct?: CloudaccountAwsIamSafeRestrictedIamEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudaccountAwsIamSafeRestrictedIamEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudaccountAwsIamSafeRestrictedIamEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccountAwsIamSafeRestrictedIamEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // roles_arns - computed: true, optional: false, required: false
  public get rolesArns() {
    return this.getListAttribute('roles_arns');
  }

  // users_arns - computed: true, optional: false, required: false
  public get usersArns() {
    return this.getListAttribute('users_arns');
  }
}

export class CloudaccountAwsIamSafeRestrictedIamEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): CloudaccountAwsIamSafeRestrictedIamEntitiesOutputReference {
    return new CloudaccountAwsIamSafeRestrictedIamEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudaccountAwsIamSafe {
}

export function cloudaccountAwsIamSafeToTerraform(struct?: CloudaccountAwsIamSafe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudaccountAwsIamSafeToHclTerraform(struct?: CloudaccountAwsIamSafe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudaccountAwsIamSafeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudaccountAwsIamSafe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccountAwsIamSafe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_group_arn - computed: true, optional: false, required: false
  public get awsGroupArn() {
    return this.getStringAttribute('aws_group_arn');
  }

  // aws_policy_arn - computed: true, optional: false, required: false
  public get awsPolicyArn() {
    return this.getStringAttribute('aws_policy_arn');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // restricted_iam_entities - computed: true, optional: false, required: false
  private _restrictedIamEntities = new CloudaccountAwsIamSafeRestrictedIamEntitiesList(this, "restricted_iam_entities", true);
  public get restrictedIamEntities() {
    return this._restrictedIamEntities;
  }
}

export class CloudaccountAwsIamSafeList extends cdktf.ComplexList {

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
  public get(index: number): CloudaccountAwsIamSafeOutputReference {
    return new CloudaccountAwsIamSafeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudaccountAwsCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#api_key CloudaccountAws#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#arn CloudaccountAws#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#iam_user CloudaccountAws#iam_user}
  */
  readonly iamUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#secret CloudaccountAws#secret}
  */
  readonly secret: string;
  /**
  * The cloud account onboarding method. Should be set to 'RoleBased' for aws and 'UserBased' for awsGov and awsChina
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#type CloudaccountAws#type}
  */
  readonly type: string;
}

export function cloudaccountAwsCredentialsToTerraform(struct?: CloudaccountAwsCredentialsOutputReference | CloudaccountAwsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    arn: cdktf.stringToTerraform(struct!.arn),
    iam_user: cdktf.stringToTerraform(struct!.iamUser),
    secret: cdktf.stringToTerraform(struct!.secret),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudaccountAwsCredentialsToHclTerraform(struct?: CloudaccountAwsCredentialsOutputReference | CloudaccountAwsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_user: {
      value: cdktf.stringToHclTerraform(struct!.iamUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudaccountAwsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudaccountAwsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._iamUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamUser = this._iamUser;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccountAwsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._arn = undefined;
      this._iamUser = undefined;
      this._secret = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._arn = value.arn;
      this._iamUser = value.iamUser;
      this._secret = value.secret;
      this._type = value.type;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // iam_user - computed: false, optional: true, required: false
  private _iamUser?: string; 
  public get iamUser() {
    return this.getStringAttribute('iam_user');
  }
  public set iamUser(value: string) {
    this._iamUser = value;
  }
  public resetIamUser() {
    this._iamUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamUserInput() {
    return this._iamUser;
  }

  // is_read_only - computed: true, optional: false, required: false
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CloudaccountAwsNetSecRegions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#new_group_behavior CloudaccountAws#new_group_behavior}
  */
  readonly newGroupBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#region CloudaccountAws#region}
  */
  readonly region: string;
}

export function cloudaccountAwsNetSecRegionsToTerraform(struct?: CloudaccountAwsNetSecRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_group_behavior: cdktf.stringToTerraform(struct!.newGroupBehavior),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function cloudaccountAwsNetSecRegionsToHclTerraform(struct?: CloudaccountAwsNetSecRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_group_behavior: {
      value: cdktf.stringToHclTerraform(struct!.newGroupBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudaccountAwsNetSecRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudaccountAwsNetSecRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newGroupBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.newGroupBehavior = this._newGroupBehavior;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccountAwsNetSecRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newGroupBehavior = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newGroupBehavior = value.newGroupBehavior;
      this._region = value.region;
    }
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_group_behavior - computed: true, optional: true, required: false
  private _newGroupBehavior?: string; 
  public get newGroupBehavior() {
    return this.getStringAttribute('new_group_behavior');
  }
  public set newGroupBehavior(value: string) {
    this._newGroupBehavior = value;
  }
  public resetNewGroupBehavior() {
    this._newGroupBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newGroupBehaviorInput() {
    return this._newGroupBehavior;
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
}

export class CloudaccountAwsNetSecRegionsList extends cdktf.ComplexList {
  public internalValue? : CloudaccountAwsNetSecRegions[] | cdktf.IResolvable

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
  public get(index: number): CloudaccountAwsNetSecRegionsOutputReference {
    return new CloudaccountAwsNetSecRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudaccountAwsNetSec {
  /**
  * regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#regions CloudaccountAws#regions}
  */
  readonly regions: CloudaccountAwsNetSecRegions[] | cdktf.IResolvable;
}

export function cloudaccountAwsNetSecToTerraform(struct?: CloudaccountAwsNetSecOutputReference | CloudaccountAwsNetSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regions: cdktf.listMapper(cloudaccountAwsNetSecRegionsToTerraform, true)(struct!.regions),
  }
}


export function cloudaccountAwsNetSecToHclTerraform(struct?: CloudaccountAwsNetSecOutputReference | CloudaccountAwsNetSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regions: {
      value: cdktf.listMapperHcl(cloudaccountAwsNetSecRegionsToHclTerraform, true)(struct!.regions),
      isBlock: true,
      type: "list",
      storageClassType: "CloudaccountAwsNetSecRegionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudaccountAwsNetSecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudaccountAwsNetSec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccountAwsNetSec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regions.internalValue = value.regions;
    }
  }

  // regions - computed: false, optional: false, required: true
  private _regions = new CloudaccountAwsNetSecRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
  public putRegions(value: CloudaccountAwsNetSecRegions[] | cdktf.IResolvable) {
    this._regions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws dome9_cloudaccount_aws}
*/
export class CloudaccountAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_cloudaccount_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudaccountAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudaccountAws to import
  * @param importFromId The id of the existing CloudaccountAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudaccountAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_cloudaccount_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_aws dome9_cloudaccount_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudaccountAwsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudaccountAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_cloudaccount_aws',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
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
    this._name = config.name;
    this._organizationalUnitId = config.organizationalUnitId;
    this._vendor = config.vendor;
    this._credentials.internalValue = config.credentials;
    this._netSec.internalValue = config.netSec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_read_only - computed: true, optional: false, required: false
  public get allowReadOnly() {
    return this.getBooleanAttribute('allow_read_only');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // external_account_number - computed: true, optional: false, required: false
  public get externalAccountNumber() {
    return this.getStringAttribute('external_account_number');
  }

  // full_protection - computed: true, optional: false, required: false
  public get fullProtection() {
    return this.getBooleanAttribute('full_protection');
  }

  // iam_safe - computed: true, optional: false, required: false
  private _iamSafe = new CloudaccountAwsIamSafeList(this, "iam_safe", true);
  public get iamSafe() {
    return this._iamSafe;
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

  // is_fetching_suspended - computed: true, optional: false, required: false
  public get isFetchingSuspended() {
    return this.getBooleanAttribute('is_fetching_suspended');
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

  // organizational_unit_id - computed: false, optional: true, required: false
  private _organizationalUnitId?: string; 
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }
  public set organizationalUnitId(value: string) {
    this._organizationalUnitId = value;
  }
  public resetOrganizationalUnitId() {
    this._organizationalUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdInput() {
    return this._organizationalUnitId;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new CloudaccountAwsCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: CloudaccountAwsCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // net_sec - computed: false, optional: true, required: false
  private _netSec = new CloudaccountAwsNetSecOutputReference(this, "net_sec");
  public get netSec() {
    return this._netSec;
  }
  public putNetSec(value: CloudaccountAwsNetSec) {
    this._netSec.internalValue = value;
  }
  public resetNetSec() {
    this._netSec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netSecInput() {
    return this._netSec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organizational_unit_id: cdktf.stringToTerraform(this._organizationalUnitId),
      vendor: cdktf.stringToTerraform(this._vendor),
      credentials: cloudaccountAwsCredentialsToTerraform(this._credentials.internalValue),
      net_sec: cloudaccountAwsNetSecToTerraform(this._netSec.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit_id: {
        value: cdktf.stringToHclTerraform(this._organizationalUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cloudaccountAwsCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudaccountAwsCredentialsList",
      },
      net_sec: {
        value: cloudaccountAwsNetSecToHclTerraform(this._netSec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudaccountAwsNetSecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
