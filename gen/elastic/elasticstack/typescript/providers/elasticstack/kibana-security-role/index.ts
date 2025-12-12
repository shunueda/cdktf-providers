// https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaSecurityRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description for the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#description KibanaSecurityRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#id KibanaSecurityRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional meta-data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#metadata KibanaSecurityRole#metadata}
  */
  readonly metadata?: string;
  /**
  * The name for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#name KibanaSecurityRole#name}
  */
  readonly name: string;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#elasticsearch KibanaSecurityRole#elasticsearch}
  */
  readonly elasticsearch: KibanaSecurityRoleElasticsearch;
  /**
  * kibana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#kibana KibanaSecurityRole#kibana}
  */
  readonly kibana?: KibanaSecurityRoleKibana[] | cdktf.IResolvable;
}
export interface KibanaSecurityRoleElasticsearchIndicesFieldSecurity {
  /**
  * List of the fields to which the grants will not be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#except KibanaSecurityRole#except}
  */
  readonly except?: string[];
  /**
  * List of the fields to grant the access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#grant KibanaSecurityRole#grant}
  */
  readonly grant?: string[];
}

export function kibanaSecurityRoleElasticsearchIndicesFieldSecurityToTerraform(struct?: KibanaSecurityRoleElasticsearchIndicesFieldSecurityOutputReference | KibanaSecurityRoleElasticsearchIndicesFieldSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
    grant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grant),
  }
}


export function kibanaSecurityRoleElasticsearchIndicesFieldSecurityToHclTerraform(struct?: KibanaSecurityRoleElasticsearchIndicesFieldSecurityOutputReference | KibanaSecurityRoleElasticsearchIndicesFieldSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    grant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.grant),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSecurityRoleElasticsearchIndicesFieldSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSecurityRoleElasticsearchIndicesFieldSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    if (this._grant !== undefined) {
      hasAnyValues = true;
      internalValueResult.grant = this._grant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityRoleElasticsearchIndicesFieldSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._except = undefined;
      this._grant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._except = value.except;
      this._grant = value.grant;
    }
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return cdktf.Fn.tolist(this.getListAttribute('except'));
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }

  // grant - computed: false, optional: true, required: false
  private _grant?: string[]; 
  public get grant() {
    return cdktf.Fn.tolist(this.getListAttribute('grant'));
  }
  public set grant(value: string[]) {
    this._grant = value;
  }
  public resetGrant() {
    this._grant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant;
  }
}
export interface KibanaSecurityRoleElasticsearchIndices {
  /**
  * A list of indices (or index name patterns) to which the permissions in this entry apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#names KibanaSecurityRole#names}
  */
  readonly names: string[];
  /**
  * The index level privileges that the owners of the role have on the specified indices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#privileges KibanaSecurityRole#privileges}
  */
  readonly privileges: string[];
  /**
  * A search query that defines the documents the owners of the role have read access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#query KibanaSecurityRole#query}
  */
  readonly query?: string;
  /**
  * field_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#field_security KibanaSecurityRole#field_security}
  */
  readonly fieldSecurity?: KibanaSecurityRoleElasticsearchIndicesFieldSecurity;
}

export function kibanaSecurityRoleElasticsearchIndicesToTerraform(struct?: KibanaSecurityRoleElasticsearchIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    query: cdktf.stringToTerraform(struct!.query),
    field_security: kibanaSecurityRoleElasticsearchIndicesFieldSecurityToTerraform(struct!.fieldSecurity),
  }
}


export function kibanaSecurityRoleElasticsearchIndicesToHclTerraform(struct?: KibanaSecurityRoleElasticsearchIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_security: {
      value: kibanaSecurityRoleElasticsearchIndicesFieldSecurityToHclTerraform(struct!.fieldSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSecurityRoleElasticsearchIndicesFieldSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSecurityRoleElasticsearchIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaSecurityRoleElasticsearchIndices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._fieldSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSecurity = this._fieldSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityRoleElasticsearchIndices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._privileges = undefined;
      this._query = undefined;
      this._fieldSecurity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._privileges = value.privileges;
      this._query = value.query;
      this._fieldSecurity.internalValue = value.fieldSecurity;
    }
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // field_security - computed: false, optional: true, required: false
  private _fieldSecurity = new KibanaSecurityRoleElasticsearchIndicesFieldSecurityOutputReference(this, "field_security");
  public get fieldSecurity() {
    return this._fieldSecurity;
  }
  public putFieldSecurity(value: KibanaSecurityRoleElasticsearchIndicesFieldSecurity) {
    this._fieldSecurity.internalValue = value;
  }
  public resetFieldSecurity() {
    this._fieldSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSecurityInput() {
    return this._fieldSecurity.internalValue;
  }
}

export class KibanaSecurityRoleElasticsearchIndicesList extends cdktf.ComplexList {
  public internalValue? : KibanaSecurityRoleElasticsearchIndices[] | cdktf.IResolvable

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
  public get(index: number): KibanaSecurityRoleElasticsearchIndicesOutputReference {
    return new KibanaSecurityRoleElasticsearchIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity {
  /**
  * List of the fields to which the grants will not be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#except KibanaSecurityRole#except}
  */
  readonly except?: string[];
  /**
  * List of the fields to grant the access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#grant KibanaSecurityRole#grant}
  */
  readonly grant?: string[];
}

export function kibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityToTerraform(struct?: KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityOutputReference | KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
    grant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grant),
  }
}


export function kibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityToHclTerraform(struct?: KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityOutputReference | KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    grant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.grant),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    if (this._grant !== undefined) {
      hasAnyValues = true;
      internalValueResult.grant = this._grant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._except = undefined;
      this._grant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._except = value.except;
      this._grant = value.grant;
    }
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return cdktf.Fn.tolist(this.getListAttribute('except'));
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }

  // grant - computed: false, optional: true, required: false
  private _grant?: string[]; 
  public get grant() {
    return cdktf.Fn.tolist(this.getListAttribute('grant'));
  }
  public set grant(value: string[]) {
    this._grant = value;
  }
  public resetGrant() {
    this._grant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant;
  }
}
export interface KibanaSecurityRoleElasticsearchRemoteIndices {
  /**
  * A list of cluster aliases to which the permissions in this entry apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#clusters KibanaSecurityRole#clusters}
  */
  readonly clusters: string[];
  /**
  * A list of indices (or index name patterns) to which the permissions in this entry apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#names KibanaSecurityRole#names}
  */
  readonly names: string[];
  /**
  * The index level privileges that the owners of the role have on the specified indices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#privileges KibanaSecurityRole#privileges}
  */
  readonly privileges: string[];
  /**
  * A search query that defines the documents the owners of the role have read access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#query KibanaSecurityRole#query}
  */
  readonly query?: string;
  /**
  * field_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#field_security KibanaSecurityRole#field_security}
  */
  readonly fieldSecurity?: KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity;
}

export function kibanaSecurityRoleElasticsearchRemoteIndicesToTerraform(struct?: KibanaSecurityRoleElasticsearchRemoteIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusters),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    query: cdktf.stringToTerraform(struct!.query),
    field_security: kibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityToTerraform(struct!.fieldSecurity),
  }
}


export function kibanaSecurityRoleElasticsearchRemoteIndicesToHclTerraform(struct?: KibanaSecurityRoleElasticsearchRemoteIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_security: {
      value: kibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityToHclTerraform(struct!.fieldSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSecurityRoleElasticsearchRemoteIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaSecurityRoleElasticsearchRemoteIndices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._fieldSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSecurity = this._fieldSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityRoleElasticsearchRemoteIndices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusters = undefined;
      this._names = undefined;
      this._privileges = undefined;
      this._query = undefined;
      this._fieldSecurity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusters = value.clusters;
      this._names = value.names;
      this._privileges = value.privileges;
      this._query = value.query;
      this._fieldSecurity.internalValue = value.fieldSecurity;
    }
  }

  // clusters - computed: false, optional: false, required: true
  private _clusters?: string[]; 
  public get clusters() {
    return cdktf.Fn.tolist(this.getListAttribute('clusters'));
  }
  public set clusters(value: string[]) {
    this._clusters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // field_security - computed: false, optional: true, required: false
  private _fieldSecurity = new KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityOutputReference(this, "field_security");
  public get fieldSecurity() {
    return this._fieldSecurity;
  }
  public putFieldSecurity(value: KibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity) {
    this._fieldSecurity.internalValue = value;
  }
  public resetFieldSecurity() {
    this._fieldSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSecurityInput() {
    return this._fieldSecurity.internalValue;
  }
}

export class KibanaSecurityRoleElasticsearchRemoteIndicesList extends cdktf.ComplexList {
  public internalValue? : KibanaSecurityRoleElasticsearchRemoteIndices[] | cdktf.IResolvable

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
  public get(index: number): KibanaSecurityRoleElasticsearchRemoteIndicesOutputReference {
    return new KibanaSecurityRoleElasticsearchRemoteIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaSecurityRoleElasticsearch {
  /**
  * List of the cluster privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#cluster KibanaSecurityRole#cluster}
  */
  readonly cluster?: string[];
  /**
  * A list of usernames the owners of this role can impersonate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#run_as KibanaSecurityRole#run_as}
  */
  readonly runAs?: string[];
  /**
  * indices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#indices KibanaSecurityRole#indices}
  */
  readonly indices?: KibanaSecurityRoleElasticsearchIndices[] | cdktf.IResolvable;
  /**
  * remote_indices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#remote_indices KibanaSecurityRole#remote_indices}
  */
  readonly remoteIndices?: KibanaSecurityRoleElasticsearchRemoteIndices[] | cdktf.IResolvable;
}

export function kibanaSecurityRoleElasticsearchToTerraform(struct?: KibanaSecurityRoleElasticsearchOutputReference | KibanaSecurityRoleElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cluster),
    run_as: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runAs),
    indices: cdktf.listMapper(kibanaSecurityRoleElasticsearchIndicesToTerraform, true)(struct!.indices),
    remote_indices: cdktf.listMapper(kibanaSecurityRoleElasticsearchRemoteIndicesToTerraform, true)(struct!.remoteIndices),
  }
}


export function kibanaSecurityRoleElasticsearchToHclTerraform(struct?: KibanaSecurityRoleElasticsearchOutputReference | KibanaSecurityRoleElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cluster),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    run_as: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.runAs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    indices: {
      value: cdktf.listMapperHcl(kibanaSecurityRoleElasticsearchIndicesToHclTerraform, true)(struct!.indices),
      isBlock: true,
      type: "set",
      storageClassType: "KibanaSecurityRoleElasticsearchIndicesList",
    },
    remote_indices: {
      value: cdktf.listMapperHcl(kibanaSecurityRoleElasticsearchRemoteIndicesToHclTerraform, true)(struct!.remoteIndices),
      isBlock: true,
      type: "set",
      storageClassType: "KibanaSecurityRoleElasticsearchRemoteIndicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSecurityRoleElasticsearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KibanaSecurityRoleElasticsearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._runAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAs = this._runAs;
    }
    if (this._indices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indices = this._indices?.internalValue;
    }
    if (this._remoteIndices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIndices = this._remoteIndices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityRoleElasticsearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._runAs = undefined;
      this._indices.internalValue = undefined;
      this._remoteIndices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._runAs = value.runAs;
      this._indices.internalValue = value.indices;
      this._remoteIndices.internalValue = value.remoteIndices;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string[]; 
  public get cluster() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster'));
  }
  public set cluster(value: string[]) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // run_as - computed: false, optional: true, required: false
  private _runAs?: string[]; 
  public get runAs() {
    return cdktf.Fn.tolist(this.getListAttribute('run_as'));
  }
  public set runAs(value: string[]) {
    this._runAs = value;
  }
  public resetRunAs() {
    this._runAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs;
  }

  // indices - computed: false, optional: true, required: false
  private _indices = new KibanaSecurityRoleElasticsearchIndicesList(this, "indices", true);
  public get indices() {
    return this._indices;
  }
  public putIndices(value: KibanaSecurityRoleElasticsearchIndices[] | cdktf.IResolvable) {
    this._indices.internalValue = value;
  }
  public resetIndices() {
    this._indices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices.internalValue;
  }

  // remote_indices - computed: false, optional: true, required: false
  private _remoteIndices = new KibanaSecurityRoleElasticsearchRemoteIndicesList(this, "remote_indices", true);
  public get remoteIndices() {
    return this._remoteIndices;
  }
  public putRemoteIndices(value: KibanaSecurityRoleElasticsearchRemoteIndices[] | cdktf.IResolvable) {
    this._remoteIndices.internalValue = value;
  }
  public resetRemoteIndices() {
    this._remoteIndices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIndicesInput() {
    return this._remoteIndices.internalValue;
  }
}
export interface KibanaSecurityRoleKibanaFeature {
  /**
  * Feature name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#name KibanaSecurityRole#name}
  */
  readonly name: string;
  /**
  * Feature privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#privileges KibanaSecurityRole#privileges}
  */
  readonly privileges: string[];
}

export function kibanaSecurityRoleKibanaFeatureToTerraform(struct?: KibanaSecurityRoleKibanaFeature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
  }
}


export function kibanaSecurityRoleKibanaFeatureToHclTerraform(struct?: KibanaSecurityRoleKibanaFeature | cdktf.IResolvable): any {
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
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSecurityRoleKibanaFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaSecurityRoleKibanaFeature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityRoleKibanaFeature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._privileges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._privileges = value.privileges;
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

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }
}

export class KibanaSecurityRoleKibanaFeatureList extends cdktf.ComplexList {
  public internalValue? : KibanaSecurityRoleKibanaFeature[] | cdktf.IResolvable

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
  public get(index: number): KibanaSecurityRoleKibanaFeatureOutputReference {
    return new KibanaSecurityRoleKibanaFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaSecurityRoleKibana {
  /**
  * A base privilege. When specified, the base must be ["all"] or ["read"]. When the base privileges are specified, you are unable to use the "feature" section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#base KibanaSecurityRole#base}
  */
  readonly base?: string[];
  /**
  * The spaces to apply the privileges to. To grant access to all spaces, set to ["*"], or omit the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#spaces KibanaSecurityRole#spaces}
  */
  readonly spaces: string[];
  /**
  * feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#feature KibanaSecurityRole#feature}
  */
  readonly feature?: KibanaSecurityRoleKibanaFeature[] | cdktf.IResolvable;
}

export function kibanaSecurityRoleKibanaToTerraform(struct?: KibanaSecurityRoleKibana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.base),
    spaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.spaces),
    feature: cdktf.listMapper(kibanaSecurityRoleKibanaFeatureToTerraform, true)(struct!.feature),
  }
}


export function kibanaSecurityRoleKibanaToHclTerraform(struct?: KibanaSecurityRoleKibana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.base),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    spaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.spaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    feature: {
      value: cdktf.listMapperHcl(kibanaSecurityRoleKibanaFeatureToHclTerraform, true)(struct!.feature),
      isBlock: true,
      type: "set",
      storageClassType: "KibanaSecurityRoleKibanaFeatureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSecurityRoleKibanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaSecurityRoleKibana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._spaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaces = this._spaces;
    }
    if (this._feature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityRoleKibana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._spaces = undefined;
      this._feature.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._spaces = value.spaces;
      this._feature.internalValue = value.feature;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: string[]; 
  public get base() {
    return cdktf.Fn.tolist(this.getListAttribute('base'));
  }
  public set base(value: string[]) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // spaces - computed: false, optional: false, required: true
  private _spaces?: string[]; 
  public get spaces() {
    return cdktf.Fn.tolist(this.getListAttribute('spaces'));
  }
  public set spaces(value: string[]) {
    this._spaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spacesInput() {
    return this._spaces;
  }

  // feature - computed: false, optional: true, required: false
  private _feature = new KibanaSecurityRoleKibanaFeatureList(this, "feature", true);
  public get feature() {
    return this._feature;
  }
  public putFeature(value: KibanaSecurityRoleKibanaFeature[] | cdktf.IResolvable) {
    this._feature.internalValue = value;
  }
  public resetFeature() {
    this._feature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature.internalValue;
  }
}

export class KibanaSecurityRoleKibanaList extends cdktf.ComplexList {
  public internalValue? : KibanaSecurityRoleKibana[] | cdktf.IResolvable

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
  public get(index: number): KibanaSecurityRoleKibanaOutputReference {
    return new KibanaSecurityRoleKibanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role elasticstack_kibana_security_role}
*/
export class KibanaSecurityRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_security_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaSecurityRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaSecurityRole to import
  * @param importFromId The id of the existing KibanaSecurityRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaSecurityRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_security_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_role elasticstack_kibana_security_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaSecurityRoleConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaSecurityRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_security_role',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._elasticsearch.internalValue = config.elasticsearch;
    this._kibana.internalValue = config.kibana;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // elasticsearch - computed: false, optional: false, required: true
  private _elasticsearch = new KibanaSecurityRoleElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: KibanaSecurityRoleElasticsearch) {
    this._elasticsearch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // kibana - computed: false, optional: true, required: false
  private _kibana = new KibanaSecurityRoleKibanaList(this, "kibana", true);
  public get kibana() {
    return this._kibana;
  }
  public putKibana(value: KibanaSecurityRoleKibana[] | cdktf.IResolvable) {
    this._kibana.internalValue = value;
  }
  public resetKibana() {
    this._kibana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaInput() {
    return this._kibana.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      elasticsearch: kibanaSecurityRoleElasticsearchToTerraform(this._elasticsearch.internalValue),
      kibana: cdktf.listMapper(kibanaSecurityRoleKibanaToTerraform, true)(this._kibana.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
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
      elasticsearch: {
        value: kibanaSecurityRoleElasticsearchToHclTerraform(this._elasticsearch.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KibanaSecurityRoleElasticsearchList",
      },
      kibana: {
        value: cdktf.listMapperHcl(kibanaSecurityRoleKibanaToHclTerraform, true)(this._kibana.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KibanaSecurityRoleKibanaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
