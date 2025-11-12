// https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom ingress port number description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#custom_ingress_port Datastore#custom_ingress_port}
  */
  readonly customIngressPort?: number;
  /**
  * Host FQDN name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#dataaccess_controller_id Datastore#dataaccess_controller_id}
  */
  readonly dataaccessControllerId: string;
  /**
  * Data provider's FQDN hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#hostname Datastore#hostname}
  */
  readonly hostname: string;
  /**
  * DataStore name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#name Datastore#name}
  */
  readonly name: string;
  /**
  * Port number description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#origin_port Datastore#origin_port}
  */
  readonly originPort?: number;
  /**
  * ProjectIds list of project IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#project_ids Datastore#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * The datastore type, for example: POSTGRESQL, SNOWFLAKE, etc. The full list is available at https://app.satoricyber.com/docs/api#post-/api/v1/datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#type Datastore#type}
  */
  readonly type: string;
  /**
  * baseline_security_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#baseline_security_policy Datastore#baseline_security_policy}
  */
  readonly baselineSecurityPolicy?: DatastoreBaselineSecurityPolicy;
  /**
  * databricks_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#databricks_settings Datastore#databricks_settings}
  */
  readonly databricksSettings?: DatastoreDatabricksSettings[] | cdktf.IResolvable;
  /**
  * datastore_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#datastore_settings Datastore#datastore_settings}
  */
  readonly datastoreSettings?: DatastoreDatastoreSettings[] | cdktf.IResolvable;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#network_policy Datastore#network_policy}
  */
  readonly networkPolicy?: DatastoreNetworkPolicy[] | cdktf.IResolvable;
  /**
  * satori_auth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#satori_auth_settings Datastore#satori_auth_settings}
  */
  readonly satoriAuthSettings?: DatastoreSatoriAuthSettings;
}
export interface DatastoreBaselineSecurityPolicyExclusionsExcludedIdentities {
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#identity Datastore#identity}
  */
  readonly identity?: string;
  /**
  * USER type is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#identity_type Datastore#identity_type}
  */
  readonly identityType?: string;
}

export function datastoreBaselineSecurityPolicyExclusionsExcludedIdentitiesToTerraform(struct?: DatastoreBaselineSecurityPolicyExclusionsExcludedIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity: cdktf.stringToTerraform(struct!.identity),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}


export function datastoreBaselineSecurityPolicyExclusionsExcludedIdentitiesToHclTerraform(struct?: DatastoreBaselineSecurityPolicyExclusionsExcludedIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreBaselineSecurityPolicyExclusionsExcludedIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreBaselineSecurityPolicyExclusionsExcludedIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreBaselineSecurityPolicyExclusionsExcludedIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identity = undefined;
      this._identityType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identity = value.identity;
      this._identityType = value.identityType;
    }
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }
}

export class DatastoreBaselineSecurityPolicyExclusionsExcludedIdentitiesList extends cdktf.ComplexList {
  public internalValue? : DatastoreBaselineSecurityPolicyExclusionsExcludedIdentities[] | cdktf.IResolvable

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
  public get(index: number): DatastoreBaselineSecurityPolicyExclusionsExcludedIdentitiesOutputReference {
    return new DatastoreBaselineSecurityPolicyExclusionsExcludedIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatterns {
  /**
  * Query pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#pattern Datastore#pattern}
  */
  readonly pattern?: string;
}

export function datastoreBaselineSecurityPolicyExclusionsExcludedQueryPatternsToTerraform(struct?: DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function datastoreBaselineSecurityPolicyExclusionsExcludedQueryPatternsToHclTerraform(struct?: DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatternsList extends cdktf.ComplexList {
  public internalValue? : DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatterns[] | cdktf.IResolvable

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
  public get(index: number): DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatternsOutputReference {
    return new DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreBaselineSecurityPolicyExclusions {
  /**
  * excluded_identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#excluded_identities Datastore#excluded_identities}
  */
  readonly excludedIdentities?: DatastoreBaselineSecurityPolicyExclusionsExcludedIdentities[] | cdktf.IResolvable;
  /**
  * excluded_query_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#excluded_query_patterns Datastore#excluded_query_patterns}
  */
  readonly excludedQueryPatterns?: DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatterns[] | cdktf.IResolvable;
}

export function datastoreBaselineSecurityPolicyExclusionsToTerraform(struct?: DatastoreBaselineSecurityPolicyExclusionsOutputReference | DatastoreBaselineSecurityPolicyExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_identities: cdktf.listMapper(datastoreBaselineSecurityPolicyExclusionsExcludedIdentitiesToTerraform, true)(struct!.excludedIdentities),
    excluded_query_patterns: cdktf.listMapper(datastoreBaselineSecurityPolicyExclusionsExcludedQueryPatternsToTerraform, true)(struct!.excludedQueryPatterns),
  }
}


export function datastoreBaselineSecurityPolicyExclusionsToHclTerraform(struct?: DatastoreBaselineSecurityPolicyExclusionsOutputReference | DatastoreBaselineSecurityPolicyExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_identities: {
      value: cdktf.listMapperHcl(datastoreBaselineSecurityPolicyExclusionsExcludedIdentitiesToHclTerraform, true)(struct!.excludedIdentities),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreBaselineSecurityPolicyExclusionsExcludedIdentitiesList",
    },
    excluded_query_patterns: {
      value: cdktf.listMapperHcl(datastoreBaselineSecurityPolicyExclusionsExcludedQueryPatternsToHclTerraform, true)(struct!.excludedQueryPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreBaselineSecurityPolicyExclusionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastoreBaselineSecurityPolicyExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedIdentities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIdentities = this._excludedIdentities?.internalValue;
    }
    if (this._excludedQueryPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedQueryPatterns = this._excludedQueryPatterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreBaselineSecurityPolicyExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedIdentities.internalValue = undefined;
      this._excludedQueryPatterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedIdentities.internalValue = value.excludedIdentities;
      this._excludedQueryPatterns.internalValue = value.excludedQueryPatterns;
    }
  }

  // excluded_identities - computed: false, optional: true, required: false
  private _excludedIdentities = new DatastoreBaselineSecurityPolicyExclusionsExcludedIdentitiesList(this, "excluded_identities", false);
  public get excludedIdentities() {
    return this._excludedIdentities;
  }
  public putExcludedIdentities(value: DatastoreBaselineSecurityPolicyExclusionsExcludedIdentities[] | cdktf.IResolvable) {
    this._excludedIdentities.internalValue = value;
  }
  public resetExcludedIdentities() {
    this._excludedIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIdentitiesInput() {
    return this._excludedIdentities.internalValue;
  }

  // excluded_query_patterns - computed: false, optional: true, required: false
  private _excludedQueryPatterns = new DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatternsList(this, "excluded_query_patterns", false);
  public get excludedQueryPatterns() {
    return this._excludedQueryPatterns;
  }
  public putExcludedQueryPatterns(value: DatastoreBaselineSecurityPolicyExclusionsExcludedQueryPatterns[] | cdktf.IResolvable) {
    this._excludedQueryPatterns.internalValue = value;
  }
  public resetExcludedQueryPatterns() {
    this._excludedQueryPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedQueryPatternsInput() {
    return this._excludedQueryPatterns.internalValue;
  }
}
export interface DatastoreBaselineSecurityPolicyUnassociatedQueriesCategory {
  /**
  * Default policy action for querying locations that are not associated with a dataset, modes supported:  PASS┃REDACT┃BLOCK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#query_action Datastore#query_action}
  */
  readonly queryAction?: string;
}

export function datastoreBaselineSecurityPolicyUnassociatedQueriesCategoryToTerraform(struct?: DatastoreBaselineSecurityPolicyUnassociatedQueriesCategoryOutputReference | DatastoreBaselineSecurityPolicyUnassociatedQueriesCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_action: cdktf.stringToTerraform(struct!.queryAction),
  }
}


export function datastoreBaselineSecurityPolicyUnassociatedQueriesCategoryToHclTerraform(struct?: DatastoreBaselineSecurityPolicyUnassociatedQueriesCategoryOutputReference | DatastoreBaselineSecurityPolicyUnassociatedQueriesCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_action: {
      value: cdktf.stringToHclTerraform(struct!.queryAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreBaselineSecurityPolicyUnassociatedQueriesCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastoreBaselineSecurityPolicyUnassociatedQueriesCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryAction = this._queryAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreBaselineSecurityPolicyUnassociatedQueriesCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryAction = value.queryAction;
    }
  }

  // query_action - computed: false, optional: true, required: false
  private _queryAction?: string; 
  public get queryAction() {
    return this.getStringAttribute('query_action');
  }
  public set queryAction(value: string) {
    this._queryAction = value;
  }
  public resetQueryAction() {
    this._queryAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryActionInput() {
    return this._queryAction;
  }
}
export interface DatastoreBaselineSecurityPolicyUnsupportedQueriesCategory {
  /**
  * Default policy action for unsupported queries and objects, modes supported:  PASS┃REDACT┃BLOCK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#query_action Datastore#query_action}
  */
  readonly queryAction: string;
}

export function datastoreBaselineSecurityPolicyUnsupportedQueriesCategoryToTerraform(struct?: DatastoreBaselineSecurityPolicyUnsupportedQueriesCategoryOutputReference | DatastoreBaselineSecurityPolicyUnsupportedQueriesCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_action: cdktf.stringToTerraform(struct!.queryAction),
  }
}


export function datastoreBaselineSecurityPolicyUnsupportedQueriesCategoryToHclTerraform(struct?: DatastoreBaselineSecurityPolicyUnsupportedQueriesCategoryOutputReference | DatastoreBaselineSecurityPolicyUnsupportedQueriesCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_action: {
      value: cdktf.stringToHclTerraform(struct!.queryAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreBaselineSecurityPolicyUnsupportedQueriesCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastoreBaselineSecurityPolicyUnsupportedQueriesCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryAction = this._queryAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreBaselineSecurityPolicyUnsupportedQueriesCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryAction = value.queryAction;
    }
  }

  // query_action - computed: false, optional: false, required: true
  private _queryAction?: string; 
  public get queryAction() {
    return this.getStringAttribute('query_action');
  }
  public set queryAction(value: string) {
    this._queryAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryActionInput() {
    return this._queryAction;
  }
}
export interface DatastoreBaselineSecurityPolicy {
  /**
  * DataStore security policy. Defaults to `BASELINE_POLICY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#type Datastore#type}
  */
  readonly type?: string;
  /**
  * exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#exclusions Datastore#exclusions}
  */
  readonly exclusions: DatastoreBaselineSecurityPolicyExclusions;
  /**
  * unassociated_queries_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#unassociated_queries_category Datastore#unassociated_queries_category}
  */
  readonly unassociatedQueriesCategory: DatastoreBaselineSecurityPolicyUnassociatedQueriesCategory;
  /**
  * unsupported_queries_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#unsupported_queries_category Datastore#unsupported_queries_category}
  */
  readonly unsupportedQueriesCategory: DatastoreBaselineSecurityPolicyUnsupportedQueriesCategory;
}

export function datastoreBaselineSecurityPolicyToTerraform(struct?: DatastoreBaselineSecurityPolicyOutputReference | DatastoreBaselineSecurityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    exclusions: datastoreBaselineSecurityPolicyExclusionsToTerraform(struct!.exclusions),
    unassociated_queries_category: datastoreBaselineSecurityPolicyUnassociatedQueriesCategoryToTerraform(struct!.unassociatedQueriesCategory),
    unsupported_queries_category: datastoreBaselineSecurityPolicyUnsupportedQueriesCategoryToTerraform(struct!.unsupportedQueriesCategory),
  }
}


export function datastoreBaselineSecurityPolicyToHclTerraform(struct?: DatastoreBaselineSecurityPolicyOutputReference | DatastoreBaselineSecurityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: datastoreBaselineSecurityPolicyExclusionsToHclTerraform(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreBaselineSecurityPolicyExclusionsList",
    },
    unassociated_queries_category: {
      value: datastoreBaselineSecurityPolicyUnassociatedQueriesCategoryToHclTerraform(struct!.unassociatedQueriesCategory),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreBaselineSecurityPolicyUnassociatedQueriesCategoryList",
    },
    unsupported_queries_category: {
      value: datastoreBaselineSecurityPolicyUnsupportedQueriesCategoryToHclTerraform(struct!.unsupportedQueriesCategory),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreBaselineSecurityPolicyUnsupportedQueriesCategoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreBaselineSecurityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastoreBaselineSecurityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
    }
    if (this._unassociatedQueriesCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unassociatedQueriesCategory = this._unassociatedQueriesCategory?.internalValue;
    }
    if (this._unsupportedQueriesCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedQueriesCategory = this._unsupportedQueriesCategory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreBaselineSecurityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._exclusions.internalValue = undefined;
      this._unassociatedQueriesCategory.internalValue = undefined;
      this._unsupportedQueriesCategory.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._exclusions.internalValue = value.exclusions;
      this._unassociatedQueriesCategory.internalValue = value.unassociatedQueriesCategory;
      this._unsupportedQueriesCategory.internalValue = value.unsupportedQueriesCategory;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // exclusions - computed: false, optional: false, required: true
  private _exclusions = new DatastoreBaselineSecurityPolicyExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: DatastoreBaselineSecurityPolicyExclusions) {
    this._exclusions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }

  // unassociated_queries_category - computed: false, optional: false, required: true
  private _unassociatedQueriesCategory = new DatastoreBaselineSecurityPolicyUnassociatedQueriesCategoryOutputReference(this, "unassociated_queries_category");
  public get unassociatedQueriesCategory() {
    return this._unassociatedQueriesCategory;
  }
  public putUnassociatedQueriesCategory(value: DatastoreBaselineSecurityPolicyUnassociatedQueriesCategory) {
    this._unassociatedQueriesCategory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unassociatedQueriesCategoryInput() {
    return this._unassociatedQueriesCategory.internalValue;
  }

  // unsupported_queries_category - computed: false, optional: false, required: true
  private _unsupportedQueriesCategory = new DatastoreBaselineSecurityPolicyUnsupportedQueriesCategoryOutputReference(this, "unsupported_queries_category");
  public get unsupportedQueriesCategory() {
    return this._unsupportedQueriesCategory;
  }
  public putUnsupportedQueriesCategory(value: DatastoreBaselineSecurityPolicyUnsupportedQueriesCategory) {
    this._unsupportedQueriesCategory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedQueriesCategoryInput() {
    return this._unsupportedQueriesCategory.internalValue;
  }
}
export interface DatastoreDatabricksSettingsCredentials {
  /**
  * Application (client) ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#client_id Datastore#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#client_secret Datastore#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Credentials type, user `AWS_SERVICE_PRINCIPAL_TOKEN` for AWS Service Principal Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#type Datastore#type}
  */
  readonly type: string;
}

export function datastoreDatabricksSettingsCredentialsToTerraform(struct?: DatastoreDatabricksSettingsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datastoreDatabricksSettingsCredentialsToHclTerraform(struct?: DatastoreDatabricksSettingsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
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

export class DatastoreDatabricksSettingsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreDatabricksSettingsCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreDatabricksSettingsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._type = value.type;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

export class DatastoreDatabricksSettingsCredentialsList extends cdktf.ComplexList {
  public internalValue? : DatastoreDatabricksSettingsCredentials[] | cdktf.IResolvable

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
  public get(index: number): DatastoreDatabricksSettingsCredentialsOutputReference {
    return new DatastoreDatabricksSettingsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreDatabricksSettings {
  /**
  * Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#account_id Datastore#account_id}
  */
  readonly accountId: string;
  /**
  * SQL Warehouse ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#warehouse_id Datastore#warehouse_id}
  */
  readonly warehouseId: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#credentials Datastore#credentials}
  */
  readonly credentials: DatastoreDatabricksSettingsCredentials[] | cdktf.IResolvable;
}

export function datastoreDatabricksSettingsToTerraform(struct?: DatastoreDatabricksSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    warehouse_id: cdktf.stringToTerraform(struct!.warehouseId),
    credentials: cdktf.listMapper(datastoreDatabricksSettingsCredentialsToTerraform, true)(struct!.credentials),
  }
}


export function datastoreDatabricksSettingsToHclTerraform(struct?: DatastoreDatabricksSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_id: {
      value: cdktf.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.listMapperHcl(datastoreDatabricksSettingsCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreDatabricksSettingsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreDatabricksSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreDatabricksSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreDatabricksSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._warehouseId = undefined;
      this._credentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._warehouseId = value.warehouseId;
      this._credentials.internalValue = value.credentials;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new DatastoreDatabricksSettingsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DatastoreDatabricksSettingsCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}

export class DatastoreDatabricksSettingsList extends cdktf.ComplexList {
  public internalValue? : DatastoreDatabricksSettings[] | cdktf.IResolvable

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
  public get(index: number): DatastoreDatabricksSettingsOutputReference {
    return new DatastoreDatabricksSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreDatastoreSettings {
  /**
  * MongoDB AWS Hosted Zone ID, The Hosted AWS DNS Zone created for mapping MongoDB SRV records to Satori.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#aws_hosted_zone_id Datastore#aws_hosted_zone_id}
  */
  readonly awsHostedZoneId?: string;
  /**
  * MongoDB AWS Service Role ARN, The IAM role ARN assumed by the DAC and used for updating records in the hosted DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#aws_service_role_arn Datastore#aws_service_role_arn}
  */
  readonly awsServiceRoleArn?: string;
  /**
  * MongoDB deployment type, for now supports only mongodb+srv and mongodb deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#deployment_type Datastore#deployment_type}
  */
  readonly deploymentType?: string;
}

export function datastoreDatastoreSettingsToTerraform(struct?: DatastoreDatastoreSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_hosted_zone_id: cdktf.stringToTerraform(struct!.awsHostedZoneId),
    aws_service_role_arn: cdktf.stringToTerraform(struct!.awsServiceRoleArn),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
  }
}


export function datastoreDatastoreSettingsToHclTerraform(struct?: DatastoreDatastoreSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_hosted_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.awsHostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_service_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsServiceRoleArn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreDatastoreSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreDatastoreSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsHostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsHostedZoneId = this._awsHostedZoneId;
    }
    if (this._awsServiceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsServiceRoleArn = this._awsServiceRoleArn;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreDatastoreSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsHostedZoneId = undefined;
      this._awsServiceRoleArn = undefined;
      this._deploymentType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsHostedZoneId = value.awsHostedZoneId;
      this._awsServiceRoleArn = value.awsServiceRoleArn;
      this._deploymentType = value.deploymentType;
    }
  }

  // aws_hosted_zone_id - computed: false, optional: true, required: false
  private _awsHostedZoneId?: string; 
  public get awsHostedZoneId() {
    return this.getStringAttribute('aws_hosted_zone_id');
  }
  public set awsHostedZoneId(value: string) {
    this._awsHostedZoneId = value;
  }
  public resetAwsHostedZoneId() {
    this._awsHostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsHostedZoneIdInput() {
    return this._awsHostedZoneId;
  }

  // aws_service_role_arn - computed: false, optional: true, required: false
  private _awsServiceRoleArn?: string; 
  public get awsServiceRoleArn() {
    return this.getStringAttribute('aws_service_role_arn');
  }
  public set awsServiceRoleArn(value: string) {
    this._awsServiceRoleArn = value;
  }
  public resetAwsServiceRoleArn() {
    this._awsServiceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceRoleArnInput() {
    return this._awsServiceRoleArn;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }
}

export class DatastoreDatastoreSettingsList extends cdktf.ComplexList {
  public internalValue? : DatastoreDatastoreSettings[] | cdktf.IResolvable

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
  public get(index: number): DatastoreDatastoreSettingsOutputReference {
    return new DatastoreDatastoreSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreNetworkPolicyAllowedRulesIpRanges {
  /**
  * Range (IP or CIDR)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#ip_range Datastore#ip_range}
  */
  readonly ipRange: string;
}

export function datastoreNetworkPolicyAllowedRulesIpRangesToTerraform(struct?: DatastoreNetworkPolicyAllowedRulesIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
  }
}


export function datastoreNetworkPolicyAllowedRulesIpRangesToHclTerraform(struct?: DatastoreNetworkPolicyAllowedRulesIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_range: {
      value: cdktf.stringToHclTerraform(struct!.ipRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreNetworkPolicyAllowedRulesIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreNetworkPolicyAllowedRulesIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreNetworkPolicyAllowedRulesIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRange = value.ipRange;
    }
  }

  // ip_range - computed: false, optional: false, required: true
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }
}

export class DatastoreNetworkPolicyAllowedRulesIpRangesList extends cdktf.ComplexList {
  public internalValue? : DatastoreNetworkPolicyAllowedRulesIpRanges[] | cdktf.IResolvable

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
  public get(index: number): DatastoreNetworkPolicyAllowedRulesIpRangesOutputReference {
    return new DatastoreNetworkPolicyAllowedRulesIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreNetworkPolicyAllowedRules {
  /**
  * custom description for allowed IP ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#note Datastore#note}
  */
  readonly note?: string;
  /**
  * ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#ip_ranges Datastore#ip_ranges}
  */
  readonly ipRanges?: DatastoreNetworkPolicyAllowedRulesIpRanges[] | cdktf.IResolvable;
}

export function datastoreNetworkPolicyAllowedRulesToTerraform(struct?: DatastoreNetworkPolicyAllowedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    note: cdktf.stringToTerraform(struct!.note),
    ip_ranges: cdktf.listMapper(datastoreNetworkPolicyAllowedRulesIpRangesToTerraform, true)(struct!.ipRanges),
  }
}


export function datastoreNetworkPolicyAllowedRulesToHclTerraform(struct?: DatastoreNetworkPolicyAllowedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    note: {
      value: cdktf.stringToHclTerraform(struct!.note),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ranges: {
      value: cdktf.listMapperHcl(datastoreNetworkPolicyAllowedRulesIpRangesToHclTerraform, true)(struct!.ipRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreNetworkPolicyAllowedRulesIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreNetworkPolicyAllowedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreNetworkPolicyAllowedRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._note !== undefined) {
      hasAnyValues = true;
      internalValueResult.note = this._note;
    }
    if (this._ipRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreNetworkPolicyAllowedRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._note = undefined;
      this._ipRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._note = value.note;
      this._ipRanges.internalValue = value.ipRanges;
    }
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

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges = new DatastoreNetworkPolicyAllowedRulesIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }
  public putIpRanges(value: DatastoreNetworkPolicyAllowedRulesIpRanges[] | cdktf.IResolvable) {
    this._ipRanges.internalValue = value;
  }
  public resetIpRanges() {
    this._ipRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges.internalValue;
  }
}

export class DatastoreNetworkPolicyAllowedRulesList extends cdktf.ComplexList {
  public internalValue? : DatastoreNetworkPolicyAllowedRules[] | cdktf.IResolvable

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
  public get(index: number): DatastoreNetworkPolicyAllowedRulesOutputReference {
    return new DatastoreNetworkPolicyAllowedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreNetworkPolicyBlockedRulesIpRanges {
  /**
  * Range (IP or CIDR)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#ip_range Datastore#ip_range}
  */
  readonly ipRange: string;
}

export function datastoreNetworkPolicyBlockedRulesIpRangesToTerraform(struct?: DatastoreNetworkPolicyBlockedRulesIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
  }
}


export function datastoreNetworkPolicyBlockedRulesIpRangesToHclTerraform(struct?: DatastoreNetworkPolicyBlockedRulesIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_range: {
      value: cdktf.stringToHclTerraform(struct!.ipRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreNetworkPolicyBlockedRulesIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreNetworkPolicyBlockedRulesIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreNetworkPolicyBlockedRulesIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRange = value.ipRange;
    }
  }

  // ip_range - computed: false, optional: false, required: true
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }
}

export class DatastoreNetworkPolicyBlockedRulesIpRangesList extends cdktf.ComplexList {
  public internalValue? : DatastoreNetworkPolicyBlockedRulesIpRanges[] | cdktf.IResolvable

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
  public get(index: number): DatastoreNetworkPolicyBlockedRulesIpRangesOutputReference {
    return new DatastoreNetworkPolicyBlockedRulesIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreNetworkPolicyBlockedRules {
  /**
  * custom description for blocked IP ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#note Datastore#note}
  */
  readonly note?: string;
  /**
  * ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#ip_ranges Datastore#ip_ranges}
  */
  readonly ipRanges?: DatastoreNetworkPolicyBlockedRulesIpRanges[] | cdktf.IResolvable;
}

export function datastoreNetworkPolicyBlockedRulesToTerraform(struct?: DatastoreNetworkPolicyBlockedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    note: cdktf.stringToTerraform(struct!.note),
    ip_ranges: cdktf.listMapper(datastoreNetworkPolicyBlockedRulesIpRangesToTerraform, true)(struct!.ipRanges),
  }
}


export function datastoreNetworkPolicyBlockedRulesToHclTerraform(struct?: DatastoreNetworkPolicyBlockedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    note: {
      value: cdktf.stringToHclTerraform(struct!.note),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ranges: {
      value: cdktf.listMapperHcl(datastoreNetworkPolicyBlockedRulesIpRangesToHclTerraform, true)(struct!.ipRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreNetworkPolicyBlockedRulesIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreNetworkPolicyBlockedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreNetworkPolicyBlockedRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._note !== undefined) {
      hasAnyValues = true;
      internalValueResult.note = this._note;
    }
    if (this._ipRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreNetworkPolicyBlockedRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._note = undefined;
      this._ipRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._note = value.note;
      this._ipRanges.internalValue = value.ipRanges;
    }
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

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges = new DatastoreNetworkPolicyBlockedRulesIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }
  public putIpRanges(value: DatastoreNetworkPolicyBlockedRulesIpRanges[] | cdktf.IResolvable) {
    this._ipRanges.internalValue = value;
  }
  public resetIpRanges() {
    this._ipRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges.internalValue;
  }
}

export class DatastoreNetworkPolicyBlockedRulesList extends cdktf.ComplexList {
  public internalValue? : DatastoreNetworkPolicyBlockedRules[] | cdktf.IResolvable

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
  public get(index: number): DatastoreNetworkPolicyBlockedRulesOutputReference {
    return new DatastoreNetworkPolicyBlockedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreNetworkPolicy {
  /**
  * allowed_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#allowed_rules Datastore#allowed_rules}
  */
  readonly allowedRules?: DatastoreNetworkPolicyAllowedRules[] | cdktf.IResolvable;
  /**
  * blocked_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#blocked_rules Datastore#blocked_rules}
  */
  readonly blockedRules?: DatastoreNetworkPolicyBlockedRules[] | cdktf.IResolvable;
}

export function datastoreNetworkPolicyToTerraform(struct?: DatastoreNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_rules: cdktf.listMapper(datastoreNetworkPolicyAllowedRulesToTerraform, true)(struct!.allowedRules),
    blocked_rules: cdktf.listMapper(datastoreNetworkPolicyBlockedRulesToTerraform, true)(struct!.blockedRules),
  }
}


export function datastoreNetworkPolicyToHclTerraform(struct?: DatastoreNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_rules: {
      value: cdktf.listMapperHcl(datastoreNetworkPolicyAllowedRulesToHclTerraform, true)(struct!.allowedRules),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreNetworkPolicyAllowedRulesList",
    },
    blocked_rules: {
      value: cdktf.listMapperHcl(datastoreNetworkPolicyBlockedRulesToHclTerraform, true)(struct!.blockedRules),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreNetworkPolicyBlockedRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreNetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreNetworkPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRules = this._allowedRules?.internalValue;
    }
    if (this._blockedRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedRules = this._blockedRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreNetworkPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRules.internalValue = undefined;
      this._blockedRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRules.internalValue = value.allowedRules;
      this._blockedRules.internalValue = value.blockedRules;
    }
  }

  // allowed_rules - computed: false, optional: true, required: false
  private _allowedRules = new DatastoreNetworkPolicyAllowedRulesList(this, "allowed_rules", false);
  public get allowedRules() {
    return this._allowedRules;
  }
  public putAllowedRules(value: DatastoreNetworkPolicyAllowedRules[] | cdktf.IResolvable) {
    this._allowedRules.internalValue = value;
  }
  public resetAllowedRules() {
    this._allowedRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRulesInput() {
    return this._allowedRules.internalValue;
  }

  // blocked_rules - computed: false, optional: true, required: false
  private _blockedRules = new DatastoreNetworkPolicyBlockedRulesList(this, "blocked_rules", false);
  public get blockedRules() {
    return this._blockedRules;
  }
  public putBlockedRules(value: DatastoreNetworkPolicyBlockedRules[] | cdktf.IResolvable) {
    this._blockedRules.internalValue = value;
  }
  public resetBlockedRules() {
    this._blockedRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedRulesInput() {
    return this._blockedRules.internalValue;
  }
}

export class DatastoreNetworkPolicyList extends cdktf.ComplexList {
  public internalValue? : DatastoreNetworkPolicy[] | cdktf.IResolvable

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
  public get(index: number): DatastoreNetworkPolicyOutputReference {
    return new DatastoreNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreSatoriAuthSettingsCredentials {
  /**
  * Password of root user. This property is sensitive, and API does not return it in output. In order to bypass terraform update, use lifecycle.ignore_changes, see example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#password Datastore#password}
  */
  readonly password: string;
  /**
  * Username of root user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#username Datastore#username}
  */
  readonly username: string;
}

export function datastoreSatoriAuthSettingsCredentialsToTerraform(struct?: DatastoreSatoriAuthSettingsCredentialsOutputReference | DatastoreSatoriAuthSettingsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function datastoreSatoriAuthSettingsCredentialsToHclTerraform(struct?: DatastoreSatoriAuthSettingsCredentialsOutputReference | DatastoreSatoriAuthSettingsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreSatoriAuthSettingsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastoreSatoriAuthSettingsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreSatoriAuthSettingsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatastoreSatoriAuthSettings {
  /**
  * Enables Satori Personal Access Token authentication for this data store. to be able using personal access token for authentication on this data store - data store temporary credentials must be enabled and personal access token feature should be enabled for the current account (see Account setting page in Satori platform). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#enable_personal_access_token Datastore#enable_personal_access_token}
  */
  readonly enablePersonalAccessToken?: boolean | cdktf.IResolvable;
  /**
  * Enables Satori Data Store authentication. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#enabled Datastore#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#credentials Datastore#credentials}
  */
  readonly credentials?: DatastoreSatoriAuthSettingsCredentials;
}

export function datastoreSatoriAuthSettingsToTerraform(struct?: DatastoreSatoriAuthSettingsOutputReference | DatastoreSatoriAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_personal_access_token: cdktf.booleanToTerraform(struct!.enablePersonalAccessToken),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    credentials: datastoreSatoriAuthSettingsCredentialsToTerraform(struct!.credentials),
  }
}


export function datastoreSatoriAuthSettingsToHclTerraform(struct?: DatastoreSatoriAuthSettingsOutputReference | DatastoreSatoriAuthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_personal_access_token: {
      value: cdktf.booleanToHclTerraform(struct!.enablePersonalAccessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credentials: {
      value: datastoreSatoriAuthSettingsCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreSatoriAuthSettingsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreSatoriAuthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastoreSatoriAuthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePersonalAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePersonalAccessToken = this._enablePersonalAccessToken;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreSatoriAuthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePersonalAccessToken = undefined;
      this._enabled = undefined;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePersonalAccessToken = value.enablePersonalAccessToken;
      this._enabled = value.enabled;
      this._credentials.internalValue = value.credentials;
    }
  }

  // enable_personal_access_token - computed: false, optional: true, required: false
  private _enablePersonalAccessToken?: boolean | cdktf.IResolvable; 
  public get enablePersonalAccessToken() {
    return this.getBooleanAttribute('enable_personal_access_token');
  }
  public set enablePersonalAccessToken(value: boolean | cdktf.IResolvable) {
    this._enablePersonalAccessToken = value;
  }
  public resetEnablePersonalAccessToken() {
    this._enablePersonalAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePersonalAccessTokenInput() {
    return this._enablePersonalAccessToken;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DatastoreSatoriAuthSettingsCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DatastoreSatoriAuthSettingsCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore satori_datastore}
*/
export class Datastore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "satori_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Datastore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Datastore to import
  * @param importFromId The id of the existing Datastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Datastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "satori_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/datastore satori_datastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: DatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'satori_datastore',
      terraformGeneratorMetadata: {
        providerName: 'satori',
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
    this._customIngressPort = config.customIngressPort;
    this._dataaccessControllerId = config.dataaccessControllerId;
    this._hostname = config.hostname;
    this._name = config.name;
    this._originPort = config.originPort;
    this._projectIds = config.projectIds;
    this._type = config.type;
    this._baselineSecurityPolicy.internalValue = config.baselineSecurityPolicy;
    this._databricksSettings.internalValue = config.databricksSettings;
    this._datastoreSettings.internalValue = config.datastoreSettings;
    this._networkPolicy.internalValue = config.networkPolicy;
    this._satoriAuthSettings.internalValue = config.satoriAuthSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_ingress_port - computed: false, optional: true, required: false
  private _customIngressPort?: number; 
  public get customIngressPort() {
    return this.getNumberAttribute('custom_ingress_port');
  }
  public set customIngressPort(value: number) {
    this._customIngressPort = value;
  }
  public resetCustomIngressPort() {
    this._customIngressPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIngressPortInput() {
    return this._customIngressPort;
  }

  // dataaccess_controller_id - computed: false, optional: false, required: true
  private _dataaccessControllerId?: string; 
  public get dataaccessControllerId() {
    return this.getStringAttribute('dataaccess_controller_id');
  }
  public set dataaccessControllerId(value: string) {
    this._dataaccessControllerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataaccessControllerIdInput() {
    return this._dataaccessControllerId;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // origin_port - computed: false, optional: true, required: false
  private _originPort?: number; 
  public get originPort() {
    return this.getNumberAttribute('origin_port');
  }
  public set originPort(value: number) {
    this._originPort = value;
  }
  public resetOriginPort() {
    this._originPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPortInput() {
    return this._originPort;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // satori_hostname - computed: true, optional: false, required: false
  public get satoriHostname() {
    return this.getStringAttribute('satori_hostname');
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

  // baseline_security_policy - computed: false, optional: true, required: false
  private _baselineSecurityPolicy = new DatastoreBaselineSecurityPolicyOutputReference(this, "baseline_security_policy");
  public get baselineSecurityPolicy() {
    return this._baselineSecurityPolicy;
  }
  public putBaselineSecurityPolicy(value: DatastoreBaselineSecurityPolicy) {
    this._baselineSecurityPolicy.internalValue = value;
  }
  public resetBaselineSecurityPolicy() {
    this._baselineSecurityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineSecurityPolicyInput() {
    return this._baselineSecurityPolicy.internalValue;
  }

  // databricks_settings - computed: false, optional: true, required: false
  private _databricksSettings = new DatastoreDatabricksSettingsList(this, "databricks_settings", false);
  public get databricksSettings() {
    return this._databricksSettings;
  }
  public putDatabricksSettings(value: DatastoreDatabricksSettings[] | cdktf.IResolvable) {
    this._databricksSettings.internalValue = value;
  }
  public resetDatabricksSettings() {
    this._databricksSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksSettingsInput() {
    return this._databricksSettings.internalValue;
  }

  // datastore_settings - computed: false, optional: true, required: false
  private _datastoreSettings = new DatastoreDatastoreSettingsList(this, "datastore_settings", false);
  public get datastoreSettings() {
    return this._datastoreSettings;
  }
  public putDatastoreSettings(value: DatastoreDatastoreSettings[] | cdktf.IResolvable) {
    this._datastoreSettings.internalValue = value;
  }
  public resetDatastoreSettings() {
    this._datastoreSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreSettingsInput() {
    return this._datastoreSettings.internalValue;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new DatastoreNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: DatastoreNetworkPolicy[] | cdktf.IResolvable) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }

  // satori_auth_settings - computed: false, optional: true, required: false
  private _satoriAuthSettings = new DatastoreSatoriAuthSettingsOutputReference(this, "satori_auth_settings");
  public get satoriAuthSettings() {
    return this._satoriAuthSettings;
  }
  public putSatoriAuthSettings(value: DatastoreSatoriAuthSettings) {
    this._satoriAuthSettings.internalValue = value;
  }
  public resetSatoriAuthSettings() {
    this._satoriAuthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satoriAuthSettingsInput() {
    return this._satoriAuthSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_ingress_port: cdktf.numberToTerraform(this._customIngressPort),
      dataaccess_controller_id: cdktf.stringToTerraform(this._dataaccessControllerId),
      hostname: cdktf.stringToTerraform(this._hostname),
      name: cdktf.stringToTerraform(this._name),
      origin_port: cdktf.numberToTerraform(this._originPort),
      project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectIds),
      type: cdktf.stringToTerraform(this._type),
      baseline_security_policy: datastoreBaselineSecurityPolicyToTerraform(this._baselineSecurityPolicy.internalValue),
      databricks_settings: cdktf.listMapper(datastoreDatabricksSettingsToTerraform, true)(this._databricksSettings.internalValue),
      datastore_settings: cdktf.listMapper(datastoreDatastoreSettingsToTerraform, true)(this._datastoreSettings.internalValue),
      network_policy: cdktf.listMapper(datastoreNetworkPolicyToTerraform, true)(this._networkPolicy.internalValue),
      satori_auth_settings: datastoreSatoriAuthSettingsToTerraform(this._satoriAuthSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_ingress_port: {
        value: cdktf.numberToHclTerraform(this._customIngressPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dataaccess_controller_id: {
        value: cdktf.stringToHclTerraform(this._dataaccessControllerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      origin_port: {
        value: cdktf.numberToHclTerraform(this._originPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      baseline_security_policy: {
        value: datastoreBaselineSecurityPolicyToHclTerraform(this._baselineSecurityPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastoreBaselineSecurityPolicyList",
      },
      databricks_settings: {
        value: cdktf.listMapperHcl(datastoreDatabricksSettingsToHclTerraform, true)(this._databricksSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastoreDatabricksSettingsList",
      },
      datastore_settings: {
        value: cdktf.listMapperHcl(datastoreDatastoreSettingsToHclTerraform, true)(this._datastoreSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastoreDatastoreSettingsList",
      },
      network_policy: {
        value: cdktf.listMapperHcl(datastoreNetworkPolicyToHclTerraform, true)(this._networkPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastoreNetworkPolicyList",
      },
      satori_auth_settings: {
        value: datastoreSatoriAuthSettingsToHclTerraform(this._satoriAuthSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastoreSatoriAuthSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
