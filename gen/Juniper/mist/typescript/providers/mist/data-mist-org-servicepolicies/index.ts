// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_servicepolicies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistOrgServicepoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_servicepolicies#org_id DataMistOrgServicepolicies#org_id}
  */
  readonly orgId: string;
}
export interface DataMistOrgServicepoliciesOrgServicepoliciesAamw {
}

export function dataMistOrgServicepoliciesOrgServicepoliciesAamwToTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesAamw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgServicepoliciesOrgServicepoliciesAamwToHclTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesAamw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgServicepoliciesOrgServicepoliciesAamwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgServicepoliciesOrgServicepoliciesAamw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgServicepoliciesOrgServicepoliciesAamw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aamwprofile_id - computed: true, optional: false, required: false
  public get aamwprofileId() {
    return this.getStringAttribute('aamwprofile_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}
export interface DataMistOrgServicepoliciesOrgServicepoliciesAntivirus {
}

export function dataMistOrgServicepoliciesOrgServicepoliciesAntivirusToTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesAntivirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgServicepoliciesOrgServicepoliciesAntivirusToHclTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesAntivirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgServicepoliciesOrgServicepoliciesAntivirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgServicepoliciesOrgServicepoliciesAntivirus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgServicepoliciesOrgServicepoliciesAntivirus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avprofile_id - computed: true, optional: false, required: false
  public get avprofileId() {
    return this.getStringAttribute('avprofile_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}
export interface DataMistOrgServicepoliciesOrgServicepoliciesAppqoe {
}

export function dataMistOrgServicepoliciesOrgServicepoliciesAppqoeToTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesAppqoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgServicepoliciesOrgServicepoliciesAppqoeToHclTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesAppqoe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgServicepoliciesOrgServicepoliciesAppqoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgServicepoliciesOrgServicepoliciesAppqoe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgServicepoliciesOrgServicepoliciesAppqoe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataMistOrgServicepoliciesOrgServicepoliciesEwf {
}

export function dataMistOrgServicepoliciesOrgServicepoliciesEwfToTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesEwf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgServicepoliciesOrgServicepoliciesEwfToHclTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesEwf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgServicepoliciesOrgServicepoliciesEwfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistOrgServicepoliciesOrgServicepoliciesEwf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgServicepoliciesOrgServicepoliciesEwf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_only - computed: true, optional: false, required: false
  public get alertOnly() {
    return this.getBooleanAttribute('alert_only');
  }

  // block_message - computed: true, optional: false, required: false
  public get blockMessage() {
    return this.getStringAttribute('block_message');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}

export class DataMistOrgServicepoliciesOrgServicepoliciesEwfList extends cdktf.ComplexList {

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
  public get(index: number): DataMistOrgServicepoliciesOrgServicepoliciesEwfOutputReference {
    return new DataMistOrgServicepoliciesOrgServicepoliciesEwfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMistOrgServicepoliciesOrgServicepoliciesIdp {
}

export function dataMistOrgServicepoliciesOrgServicepoliciesIdpToTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgServicepoliciesOrgServicepoliciesIdpToHclTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgServicepoliciesOrgServicepoliciesIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgServicepoliciesOrgServicepoliciesIdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgServicepoliciesOrgServicepoliciesIdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_only - computed: true, optional: false, required: false
  public get alertOnly() {
    return this.getBooleanAttribute('alert_only');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // idpprofile_id - computed: true, optional: false, required: false
  public get idpprofileId() {
    return this.getStringAttribute('idpprofile_id');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}
export interface DataMistOrgServicepoliciesOrgServicepoliciesSslProxy {
}

export function dataMistOrgServicepoliciesOrgServicepoliciesSslProxyToTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesSslProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgServicepoliciesOrgServicepoliciesSslProxyToHclTerraform(struct?: DataMistOrgServicepoliciesOrgServicepoliciesSslProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgServicepoliciesOrgServicepoliciesSslProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgServicepoliciesOrgServicepoliciesSslProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgServicepoliciesOrgServicepoliciesSslProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ciphers_category - computed: true, optional: false, required: false
  public get ciphersCategory() {
    return this.getStringAttribute('ciphers_category');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataMistOrgServicepoliciesOrgServicepolicies {
}

export function dataMistOrgServicepoliciesOrgServicepoliciesToTerraform(struct?: DataMistOrgServicepoliciesOrgServicepolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgServicepoliciesOrgServicepoliciesToHclTerraform(struct?: DataMistOrgServicepoliciesOrgServicepolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgServicepoliciesOrgServicepoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistOrgServicepoliciesOrgServicepolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgServicepoliciesOrgServicepolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aamw - computed: true, optional: false, required: false
  private _aamw = new DataMistOrgServicepoliciesOrgServicepoliciesAamwOutputReference(this, "aamw");
  public get aamw() {
    return this._aamw;
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // antivirus - computed: true, optional: false, required: false
  private _antivirus = new DataMistOrgServicepoliciesOrgServicepoliciesAntivirusOutputReference(this, "antivirus");
  public get antivirus() {
    return this._antivirus;
  }

  // appqoe - computed: true, optional: false, required: false
  private _appqoe = new DataMistOrgServicepoliciesOrgServicepoliciesAppqoeOutputReference(this, "appqoe");
  public get appqoe() {
    return this._appqoe;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // ewf - computed: true, optional: false, required: false
  private _ewf = new DataMistOrgServicepoliciesOrgServicepoliciesEwfList(this, "ewf", false);
  public get ewf() {
    return this._ewf;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp - computed: true, optional: false, required: false
  private _idp = new DataMistOrgServicepoliciesOrgServicepoliciesIdpOutputReference(this, "idp");
  public get idp() {
    return this._idp;
  }

  // local_routing - computed: true, optional: false, required: false
  public get localRouting() {
    return this.getBooleanAttribute('local_routing');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // path_preference - computed: true, optional: false, required: false
  public get pathPreference() {
    return this.getStringAttribute('path_preference');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return this.getListAttribute('services');
  }

  // ssl_proxy - computed: true, optional: false, required: false
  private _sslProxy = new DataMistOrgServicepoliciesOrgServicepoliciesSslProxyOutputReference(this, "ssl_proxy");
  public get sslProxy() {
    return this._sslProxy;
  }

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return this.getListAttribute('tenants');
  }
}

export class DataMistOrgServicepoliciesOrgServicepoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataMistOrgServicepoliciesOrgServicepoliciesOutputReference {
    return new DataMistOrgServicepoliciesOrgServicepoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_servicepolicies mist_org_servicepolicies}
*/
export class DataMistOrgServicepolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_servicepolicies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistOrgServicepolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistOrgServicepolicies to import
  * @param importFromId The id of the existing DataMistOrgServicepolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_servicepolicies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistOrgServicepolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_servicepolicies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/data-sources/org_servicepolicies mist_org_servicepolicies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistOrgServicepoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistOrgServicepoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_servicepolicies',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // org_servicepolicies - computed: true, optional: false, required: false
  private _orgServicepolicies = new DataMistOrgServicepoliciesOrgServicepoliciesList(this, "org_servicepolicies", true);
  public get orgServicepolicies() {
    return this._orgServicepolicies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
