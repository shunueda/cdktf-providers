// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployCertificatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * A filter to search for resources that have been archived.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#archived DataOctopusdeployCertificates#archived}
  */
  readonly archived?: string;
  /**
  * A filter to define the first result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#first_result DataOctopusdeployCertificates#first_result}
  */
  readonly firstResult?: string;
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#ids DataOctopusdeployCertificates#ids}
  */
  readonly ids?: string[];
  /**
  * A filter used to order the search results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#order_by DataOctopusdeployCertificates#order_by}
  */
  readonly orderBy?: string;
  /**
  * A filter to search by the partial match of a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#partial_name DataOctopusdeployCertificates#partial_name}
  */
  readonly partialName?: string;
  /**
  * A filter of terms used the search operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#search DataOctopusdeployCertificates#search}
  */
  readonly search?: string;
  /**
  * A filter to specify the number of items to skip in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#skip DataOctopusdeployCertificates#skip}
  */
  readonly skip?: number;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#space_id DataOctopusdeployCertificates#space_id}
  */
  readonly spaceId?: string;
  /**
  * A filter to specify the number of items to take (or return) in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#take DataOctopusdeployCertificates#take}
  */
  readonly take?: number;
  /**
  * A filter to search by a tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#tenant DataOctopusdeployCertificates#tenant}
  */
  readonly tenant?: string;
}
export interface DataOctopusdeployCertificatesCertificates {
}

export function dataOctopusdeployCertificatesCertificatesToTerraform(struct?: DataOctopusdeployCertificatesCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployCertificatesCertificatesToHclTerraform(struct?: DataOctopusdeployCertificatesCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployCertificatesCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployCertificatesCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployCertificatesCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archived - computed: true, optional: false, required: false
  public get archived() {
    return this.getStringAttribute('archived');
  }

  // certificate_data - computed: true, optional: false, required: false
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // certificate_data_format - computed: true, optional: false, required: false
  public get certificateDataFormat() {
    return this.getStringAttribute('certificate_data_format');
  }

  // environments - computed: true, optional: false, required: false
  public get environments() {
    return this.getListAttribute('environments');
  }

  // has_private_key - computed: true, optional: false, required: false
  public get hasPrivateKey() {
    return this.getBooleanAttribute('has_private_key');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_expired - computed: true, optional: false, required: false
  public get isExpired() {
    return this.getBooleanAttribute('is_expired');
  }

  // issuer_common_name - computed: true, optional: false, required: false
  public get issuerCommonName() {
    return this.getStringAttribute('issuer_common_name');
  }

  // issuer_distinguished_name - computed: true, optional: false, required: false
  public get issuerDistinguishedName() {
    return this.getStringAttribute('issuer_distinguished_name');
  }

  // issuer_organization - computed: true, optional: false, required: false
  public get issuerOrganization() {
    return this.getStringAttribute('issuer_organization');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // replaced_by - computed: true, optional: false, required: false
  public get replacedBy() {
    return this.getStringAttribute('replaced_by');
  }

  // self_signed - computed: true, optional: false, required: false
  public get selfSigned() {
    return this.getBooleanAttribute('self_signed');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature_algorithm_name - computed: true, optional: false, required: false
  public get signatureAlgorithmName() {
    return this.getStringAttribute('signature_algorithm_name');
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }

  // subject_common_name - computed: true, optional: false, required: false
  public get subjectCommonName() {
    return this.getStringAttribute('subject_common_name');
  }

  // subject_distinguished_name - computed: true, optional: false, required: false
  public get subjectDistinguishedName() {
    return this.getStringAttribute('subject_distinguished_name');
  }

  // subject_organization - computed: true, optional: false, required: false
  public get subjectOrganization() {
    return this.getStringAttribute('subject_organization');
  }

  // tenant_tags - computed: true, optional: false, required: false
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
  }

  // tenanted_deployment_participation - computed: true, optional: false, required: false
  public get tenantedDeploymentParticipation() {
    return this.getStringAttribute('tenanted_deployment_participation');
  }

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return this.getListAttribute('tenants');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataOctopusdeployCertificatesCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployCertificatesCertificatesOutputReference {
    return new DataOctopusdeployCertificatesCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates octopusdeploy_certificates}
*/
export class DataOctopusdeployCertificates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_certificates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployCertificates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployCertificates to import
  * @param importFromId The id of the existing DataOctopusdeployCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployCertificates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_certificates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/data-sources/certificates octopusdeploy_certificates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployCertificatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployCertificatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_certificates',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archived = config.archived;
    this._firstResult = config.firstResult;
    this._ids = config.ids;
    this._orderBy = config.orderBy;
    this._partialName = config.partialName;
    this._search = config.search;
    this._skip = config.skip;
    this._spaceId = config.spaceId;
    this._take = config.take;
    this._tenant = config.tenant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archived - computed: false, optional: true, required: false
  private _archived?: string; 
  public get archived() {
    return this.getStringAttribute('archived');
  }
  public set archived(value: string) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataOctopusdeployCertificatesCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // first_result - computed: false, optional: true, required: false
  private _firstResult?: string; 
  public get firstResult() {
    return this.getStringAttribute('first_result');
  }
  public set firstResult(value: string) {
    this._firstResult = value;
  }
  public resetFirstResult() {
    this._firstResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstResultInput() {
    return this._firstResult;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // partial_name - computed: false, optional: true, required: false
  private _partialName?: string; 
  public get partialName() {
    return this.getStringAttribute('partial_name');
  }
  public set partialName(value: string) {
    this._partialName = value;
  }
  public resetPartialName() {
    this._partialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialNameInput() {
    return this._partialName;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archived: cdktf.stringToTerraform(this._archived),
      first_result: cdktf.stringToTerraform(this._firstResult),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      order_by: cdktf.stringToTerraform(this._orderBy),
      partial_name: cdktf.stringToTerraform(this._partialName),
      search: cdktf.stringToTerraform(this._search),
      skip: cdktf.numberToTerraform(this._skip),
      space_id: cdktf.stringToTerraform(this._spaceId),
      take: cdktf.numberToTerraform(this._take),
      tenant: cdktf.stringToTerraform(this._tenant),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archived: {
        value: cdktf.stringToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_result: {
        value: cdktf.stringToHclTerraform(this._firstResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_name: {
        value: cdktf.stringToHclTerraform(this._partialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
