// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCouchbaseComCouchbaseReplicationV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * The explicit mappings to use for replication which are optional. For Scopes and Collection replication support we can specify a set of implicit and explicit mappings to use. If none is specified then it is assumed to be existing bucket level replication. https://docs.couchbase.com/server/current/learn/clusters-and-availability/xdcr-with-scopes-and-collections.html#explicit-mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#explicit_mapping DataK8SCouchbaseComCouchbaseReplicationV2Manifest#explicit_mapping}
  */
  readonly explicitMapping?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMapping;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#metadata DataK8SCouchbaseComCouchbaseReplicationV2Manifest#metadata}
  */
  readonly metadata: DataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadata;
  /**
  * CouchbaseReplicationSpec allows configuration of an XDCR replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#spec DataK8SCouchbaseComCouchbaseReplicationV2Manifest#spec}
  */
  readonly spec: DataK8SCouchbaseComCouchbaseReplicationV2ManifestSpec;
}
export interface DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspace {
  /**
  * The optional collection within the scope. May be empty to just work at scope level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#collection DataK8SCouchbaseComCouchbaseReplicationV2Manifest#collection}
  */
  readonly collection?: string;
  /**
  * The scope to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#scope DataK8SCouchbaseComCouchbaseReplicationV2Manifest#scope}
  */
  readonly scope: string;
}

export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspaceToTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspaceToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._scope = value.scope;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspace {
  /**
  * The optional collection within the scope. May be empty to just work at scope level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#collection DataK8SCouchbaseComCouchbaseReplicationV2Manifest#collection}
  */
  readonly collection?: string;
  /**
  * The scope to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#scope DataK8SCouchbaseComCouchbaseReplicationV2Manifest#scope}
  */
  readonly scope: string;
}

export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspaceToTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspaceToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._scope = value.scope;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRules {
  /**
  * The source keyspace: where to replicate from. Source and target must match whether they have a collection or not, i.e. you cannot replicate from a scope to a collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#source_keyspace DataK8SCouchbaseComCouchbaseReplicationV2Manifest#source_keyspace}
  */
  readonly sourceKeyspace: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspace;
  /**
  * The target keyspace: where to replicate to. Source and target must match whether they have a collection or not, i.e. you cannot replicate from a scope to a collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#target_keyspace DataK8SCouchbaseComCouchbaseReplicationV2Manifest#target_keyspace}
  */
  readonly targetKeyspace: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspace;
}

export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesToTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_keyspace: dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspaceToTerraform(struct!.sourceKeyspace),
    target_keyspace: dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspaceToTerraform(struct!.targetKeyspace),
  }
}


export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_keyspace: {
      value: dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspaceToHclTerraform(struct!.sourceKeyspace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspace",
    },
    target_keyspace: {
      value: dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspaceToHclTerraform(struct!.targetKeyspace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceKeyspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyspace = this._sourceKeyspace?.internalValue;
    }
    if (this._targetKeyspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKeyspace = this._targetKeyspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceKeyspace.internalValue = undefined;
      this._targetKeyspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceKeyspace.internalValue = value.sourceKeyspace;
      this._targetKeyspace.internalValue = value.targetKeyspace;
    }
  }

  // source_keyspace - computed: false, optional: false, required: true
  private _sourceKeyspace = new DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspaceOutputReference(this, "source_keyspace");
  public get sourceKeyspace() {
    return this._sourceKeyspace;
  }
  public putSourceKeyspace(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesSourceKeyspace) {
    this._sourceKeyspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyspaceInput() {
    return this._sourceKeyspace.internalValue;
  }

  // target_keyspace - computed: false, optional: false, required: true
  private _targetKeyspace = new DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspaceOutputReference(this, "target_keyspace");
  public get targetKeyspace() {
    return this._targetKeyspace;
  }
  public putTargetKeyspace(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesTargetKeyspace) {
    this._targetKeyspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKeyspaceInput() {
    return this._targetKeyspace.internalValue;
  }
}

export class DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesOutputReference {
    return new DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspace {
  /**
  * The optional collection within the scope. May be empty to just work at scope level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#collection DataK8SCouchbaseComCouchbaseReplicationV2Manifest#collection}
  */
  readonly collection?: string;
  /**
  * The scope to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#scope DataK8SCouchbaseComCouchbaseReplicationV2Manifest#scope}
  */
  readonly scope: string;
}

export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspaceToTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspaceToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._scope = value.scope;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRules {
  /**
  * The source keyspace: where to block replication from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#source_keyspace DataK8SCouchbaseComCouchbaseReplicationV2Manifest#source_keyspace}
  */
  readonly sourceKeyspace: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspace;
}

export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesToTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_keyspace: dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspaceToTerraform(struct!.sourceKeyspace),
  }
}


export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_keyspace: {
      value: dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspaceToHclTerraform(struct!.sourceKeyspace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceKeyspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyspace = this._sourceKeyspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceKeyspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceKeyspace.internalValue = value.sourceKeyspace;
    }
  }

  // source_keyspace - computed: false, optional: false, required: true
  private _sourceKeyspace = new DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspaceOutputReference(this, "source_keyspace");
  public get sourceKeyspace() {
    return this._sourceKeyspace;
  }
  public putSourceKeyspace(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesSourceKeyspace) {
    this._sourceKeyspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyspaceInput() {
    return this._sourceKeyspace.internalValue;
  }
}

export class DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesOutputReference {
    return new DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMapping {
  /**
  * The list of explicit replications to carry out including any nested implicit replications: specifying a scope implicitly replicates all collections within it. There should be no duplicates, including more-specific duplicates, e.g. if you specify replication of a scope then you can only deny replication of collections within it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#allow_rules DataK8SCouchbaseComCouchbaseReplicationV2Manifest#allow_rules}
  */
  readonly allowRules?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRules[] | cdktf.IResolvable;
  /**
  * The list of explicit replications to prevent including any nested implicit denials: specifying a scope implicitly denies all collections within it. There should be no duplicates, including more-specific duplicates, e.g. if you specify denial of replication of a scope then you can only specify replication of collections within it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#deny_rules DataK8SCouchbaseComCouchbaseReplicationV2Manifest#deny_rules}
  */
  readonly denyRules?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRules[] | cdktf.IResolvable;
}

export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingToTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktf.listMapper(dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesToTerraform, false)(struct!.allowRules),
    deny_rules: cdktf.listMapper(dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesToTerraform, false)(struct!.denyRules),
  }
}


export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesList",
    },
    deny_rules: {
      value: cdktf.listMapperHcl(dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesToHclTerraform, false)(struct!.denyRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRules = this._allowRules?.internalValue;
    }
    if (this._denyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRules = this._denyRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = undefined;
      this._denyRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = value.allowRules;
      this._denyRules.internalValue = value.denyRules;
    }
  }

  // allow_rules - computed: false, optional: true, required: false
  private _allowRules = new DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingAllowRules[] | cdktf.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // deny_rules - computed: false, optional: true, required: false
  private _denyRules = new DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRulesList(this, "deny_rules", false);
  public get denyRules() {
    return this._denyRules;
  }
  public putDenyRules(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingDenyRules[] | cdktf.IResolvable) {
    this._denyRules.internalValue = value;
  }
  public resetDenyRules() {
    this._denyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRulesInput() {
    return this._denyRules.internalValue;
  }
}
export interface DataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#annotations DataK8SCouchbaseComCouchbaseReplicationV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#labels DataK8SCouchbaseComCouchbaseReplicationV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#name DataK8SCouchbaseComCouchbaseReplicationV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#namespace DataK8SCouchbaseComCouchbaseReplicationV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadataToTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadataToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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
}
export interface DataK8SCouchbaseComCouchbaseReplicationV2ManifestSpec {
  /**
  * Bucket is the source bucket to replicate from. This refers to the Couchbase bucket name, not the resource name of the bucket. A bucket with this name must be defined on this cluster. Legal bucket names have a maximum length of 100 characters and may be composed of any character from 'a-z', 'A-Z', '0-9' and '-_%.'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#bucket DataK8SCouchbaseComCouchbaseReplicationV2Manifest#bucket}
  */
  readonly bucket: string;
  /**
  * CompressionType is the type of compression to apply to the replication. When None, no compression will be applied to documents as they are transferred between clusters. When Auto, Couchbase server will automatically compress documents as they are transferred to reduce bandwidth requirements. This field must be one of 'None' or 'Auto', defaulting to 'Auto'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#compression_type DataK8SCouchbaseComCouchbaseReplicationV2Manifest#compression_type}
  */
  readonly compressionType?: string;
  /**
  * FilterExpression allows certain documents to be filtered out of the replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#filter_expression DataK8SCouchbaseComCouchbaseReplicationV2Manifest#filter_expression}
  */
  readonly filterExpression?: string;
  /**
  * Paused allows a replication to be stopped and restarted without having to restart the replication from the beginning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#paused DataK8SCouchbaseComCouchbaseReplicationV2Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * RemoteBucket is the remote bucket name to synchronize to. This refers to the Couchbase bucket name, not the resource name of the bucket. Legal bucket names have a maximum length of 100 characters and may be composed of any character from 'a-z', 'A-Z', '0-9' and '-_%.'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#remote_bucket DataK8SCouchbaseComCouchbaseReplicationV2Manifest#remote_bucket}
  */
  readonly remoteBucket: string;
}

export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestSpecToTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    filter_expression: cdktf.stringToTerraform(struct!.filterExpression),
    paused: cdktf.booleanToTerraform(struct!.paused),
    remote_bucket: cdktf.stringToTerraform(struct!.remoteBucket),
  }
}


export function dataK8SCouchbaseComCouchbaseReplicationV2ManifestSpecToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseReplicationV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_expression: {
      value: cdktf.stringToHclTerraform(struct!.filterExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_bucket: {
      value: cdktf.stringToHclTerraform(struct!.remoteBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseReplicationV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseReplicationV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._filterExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExpression = this._filterExpression;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._remoteBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteBucket = this._remoteBucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._compressionType = undefined;
      this._filterExpression = undefined;
      this._paused = undefined;
      this._remoteBucket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._compressionType = value.compressionType;
      this._filterExpression = value.filterExpression;
      this._paused = value.paused;
      this._remoteBucket = value.remoteBucket;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // filter_expression - computed: false, optional: true, required: false
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  public resetFilterExpression() {
    this._filterExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // remote_bucket - computed: false, optional: false, required: true
  private _remoteBucket?: string; 
  public get remoteBucket() {
    return this.getStringAttribute('remote_bucket');
  }
  public set remoteBucket(value: string) {
    this._remoteBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBucketInput() {
    return this._remoteBucket;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest k8s_couchbase_com_couchbase_replication_v2_manifest}
*/
export class DataK8SCouchbaseComCouchbaseReplicationV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_couchbase_com_couchbase_replication_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCouchbaseComCouchbaseReplicationV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCouchbaseComCouchbaseReplicationV2Manifest to import
  * @param importFromId The id of the existing DataK8SCouchbaseComCouchbaseReplicationV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCouchbaseComCouchbaseReplicationV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_couchbase_com_couchbase_replication_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/couchbase_com_couchbase_replication_v2_manifest k8s_couchbase_com_couchbase_replication_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCouchbaseComCouchbaseReplicationV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCouchbaseComCouchbaseReplicationV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_couchbase_com_couchbase_replication_v2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._explicitMapping.internalValue = config.explicitMapping;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // explicit_mapping - computed: false, optional: true, required: false
  private _explicitMapping = new DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingOutputReference(this, "explicit_mapping");
  public get explicitMapping() {
    return this._explicitMapping;
  }
  public putExplicitMapping(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMapping) {
    this._explicitMapping.internalValue = value;
  }
  public resetExplicitMapping() {
    this._explicitMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitMappingInput() {
    return this._explicitMapping.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCouchbaseComCouchbaseReplicationV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCouchbaseComCouchbaseReplicationV2ManifestSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      explicit_mapping: dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingToTerraform(this._explicitMapping.internalValue),
      metadata: dataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCouchbaseComCouchbaseReplicationV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      explicit_mapping: {
        value: dataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMappingToHclTerraform(this._explicitMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseReplicationV2ManifestExplicitMapping",
      },
      metadata: {
        value: dataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseReplicationV2ManifestMetadata",
      },
      spec: {
        value: dataK8SCouchbaseComCouchbaseReplicationV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseReplicationV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
