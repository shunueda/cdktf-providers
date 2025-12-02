// https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCycloidCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter credential by types, allowed types are [ssh aws custom azure azure_storage gcp basic_auth elasticsearch swift]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/credentials#credential_types DataCycloidCredentials#credential_types}
  */
  readonly credentialTypes?: string[];
  /**
  * The canonical of an organization, will default to the provider organization settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/credentials#organization DataCycloidCredentials#organization}
  */
  readonly organization?: string;
}
export interface DataCycloidCredentialsCredentials {
}

export function dataCycloidCredentialsCredentialsToTerraform(struct?: DataCycloidCredentialsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCycloidCredentialsCredentialsToHclTerraform(struct?: DataCycloidCredentialsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCycloidCredentialsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCycloidCredentialsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCycloidCredentialsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canonical - computed: true, optional: false, required: false
  public get canonical() {
    return this.getStringAttribute('canonical');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataCycloidCredentialsCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataCycloidCredentialsCredentialsOutputReference {
    return new DataCycloidCredentialsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/credentials cycloid_credentials}
*/
export class DataCycloidCredentials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cycloid_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCycloidCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCycloidCredentials to import
  * @param importFromId The id of the existing DataCycloidCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCycloidCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cycloid_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/credentials cycloid_credentials} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCycloidCredentialsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCycloidCredentialsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cycloid_credentials',
      terraformGeneratorMetadata: {
        providerName: 'cycloid',
        providerVersion: '0.0.24',
        providerVersionConstraint: '0.0.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialTypes = config.credentialTypes;
    this._organization = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_types - computed: false, optional: true, required: false
  private _credentialTypes?: string[]; 
  public get credentialTypes() {
    return this.getListAttribute('credential_types');
  }
  public set credentialTypes(value: string[]) {
    this._credentialTypes = value;
  }
  public resetCredentialTypes() {
    this._credentialTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypesInput() {
    return this._credentialTypes;
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataCycloidCredentialsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._credentialTypes),
      organization: cdktf.stringToTerraform(this._organization),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._credentialTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
