// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiphertrustOciExternalVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * CipherTrust vault ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_vault#cckm_vault_id DataCiphertrustOciExternalVault#cckm_vault_id}
  */
  readonly cckmVaultId?: string;
  /**
  * CipherTrust Vault name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_vault#cckm_vault_name DataCiphertrustOciExternalVault#cckm_vault_name}
  */
  readonly cckmVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_vault#id DataCiphertrustOciExternalVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataCiphertrustOciExternalVaultAcls {
}

export function dataCiphertrustOciExternalVaultAclsToTerraform(struct?: DataCiphertrustOciExternalVaultAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiphertrustOciExternalVaultAclsToHclTerraform(struct?: DataCiphertrustOciExternalVaultAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiphertrustOciExternalVaultAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiphertrustOciExternalVaultAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiphertrustOciExternalVaultAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataCiphertrustOciExternalVaultAclsList extends cdktf.ComplexList {

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
  public get(index: number): DataCiphertrustOciExternalVaultAclsOutputReference {
    return new DataCiphertrustOciExternalVaultAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_vault ciphertrust_oci_external_vault}
*/
export class DataCiphertrustOciExternalVault extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_oci_external_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiphertrustOciExternalVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiphertrustOciExternalVault to import
  * @param importFromId The id of the existing DataCiphertrustOciExternalVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiphertrustOciExternalVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_oci_external_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/oci_external_vault ciphertrust_oci_external_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiphertrustOciExternalVaultConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCiphertrustOciExternalVaultConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_oci_external_vault',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cckmVaultId = config.cckmVaultId;
    this._cckmVaultName = config.cckmVaultName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acls - computed: true, optional: false, required: false
  private _acls = new DataCiphertrustOciExternalVaultAclsList(this, "acls", true);
  public get acls() {
    return this._acls;
  }

  // blocked - computed: true, optional: false, required: false
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }

  // cckm_vault_id - computed: true, optional: true, required: false
  private _cckmVaultId?: string; 
  public get cckmVaultId() {
    return this.getStringAttribute('cckm_vault_id');
  }
  public set cckmVaultId(value: string) {
    this._cckmVaultId = value;
  }
  public resetCckmVaultId() {
    this._cckmVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmVaultIdInput() {
    return this._cckmVaultId;
  }

  // cckm_vault_name - computed: true, optional: true, required: false
  private _cckmVaultName?: string; 
  public get cckmVaultName() {
    return this.getStringAttribute('cckm_vault_name');
  }
  public set cckmVaultName(value: string) {
    this._cckmVaultName = value;
  }
  public resetCckmVaultName() {
    this._cckmVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmVaultNameInput() {
    return this._cckmVaultName;
  }

  // client_application_id - computed: true, optional: false, required: false
  public get clientApplicationId() {
    return this.getStringAttribute('client_application_id');
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }

  // endpoint_url_hostname - computed: true, optional: false, required: false
  public get endpointUrlHostname() {
    return this.getStringAttribute('endpoint_url_hostname');
  }

  // endpoint_url_port - computed: true, optional: false, required: false
  public get endpointUrlPort() {
    return this.getNumberAttribute('endpoint_url_port');
  }

  // external_vault_type - computed: true, optional: false, required: false
  public get externalVaultType() {
    return this.getStringAttribute('external_vault_type');
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

  // issuer_id - computed: true, optional: false, required: false
  public get issuerId() {
    return this.getStringAttribute('issuer_id');
  }

  // linked_state - computed: true, optional: false, required: false
  public get linkedState() {
    return this.getBooleanAttribute('linked_state');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vault_type - computed: true, optional: false, required: false
  public get vaultType() {
    return this.getStringAttribute('vault_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cckm_vault_id: cdktf.stringToTerraform(this._cckmVaultId),
      cckm_vault_name: cdktf.stringToTerraform(this._cckmVaultName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cckm_vault_id: {
        value: cdktf.stringToHclTerraform(this._cckmVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cckm_vault_name: {
        value: cdktf.stringToHclTerraform(this._cckmVaultName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
