// https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeyhubCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/certificate#additional DataKeyhubCertificate#additional}
  */
  readonly additional?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/certificate#uuid DataKeyhubCertificate#uuid}
  */
  readonly uuid: string;
}
export interface DataKeyhubCertificateAudit {
}

export function dataKeyhubCertificateAuditToTerraform(struct?: DataKeyhubCertificateAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubCertificateAuditToHclTerraform(struct?: DataKeyhubCertificateAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubCertificateAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubCertificateAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubCertificateAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }
}
export interface DataKeyhubCertificateLinks {
}

export function dataKeyhubCertificateLinksToTerraform(struct?: DataKeyhubCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubCertificateLinksToHclTerraform(struct?: DataKeyhubCertificateLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubCertificateLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubCertificateLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubCertificateLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubCertificateLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubCertificateLinksOutputReference {
    return new DataKeyhubCertificateLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubCertificatePermissions {
}

export function dataKeyhubCertificatePermissionsToTerraform(struct?: DataKeyhubCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubCertificatePermissionsToHclTerraform(struct?: DataKeyhubCertificatePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubCertificatePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubCertificatePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubCertificatePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubCertificatePermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubCertificatePermissionsOutputReference {
    return new DataKeyhubCertificatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/certificate keyhub_certificate}
*/
export class DataKeyhubCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyhub_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyhubCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyhubCertificate to import
  * @param importFromId The id of the existing DataKeyhubCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyhubCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyhub_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/certificate keyhub_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyhubCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyhubCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'keyhub_certificate',
      terraformGeneratorMetadata: {
        providerName: 'keyhub',
        providerVersion: '2.44.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additional = config.additional;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional - computed: false, optional: true, required: false
  private _additional?: string[]; 
  public get additional() {
    return this.getListAttribute('additional');
  }
  public set additional(value: string[]) {
    this._additional = value;
  }
  public resetAdditional() {
    this._additional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInput() {
    return this._additional;
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new DataKeyhubCertificateAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }

  // certificate_data - computed: true, optional: false, required: false
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fingerprint_sha1 - computed: true, optional: false, required: false
  public get fingerprintSha1() {
    return this.getStringAttribute('fingerprint_sha1');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // global - computed: true, optional: false, required: false
  public get global() {
    return this.getBooleanAttribute('global');
  }

  // key_data - computed: true, optional: false, required: false
  public get keyData() {
    return this.getStringAttribute('key_data');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubCertificateLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubCertificatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additional),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additional),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
