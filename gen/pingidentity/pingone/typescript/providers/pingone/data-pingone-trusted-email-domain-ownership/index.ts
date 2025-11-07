// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain_ownership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneTrustedEmailDomainOwnershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment to retrieve trusted email domain ownership verification for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain_ownership#environment_id DataPingoneTrustedEmailDomainOwnership#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the auto-generated ID of the email domain.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain_ownership#trusted_email_domain_id DataPingoneTrustedEmailDomainOwnership#trusted_email_domain_id}
  */
  readonly trustedEmailDomainId: string;
}
export interface DataPingoneTrustedEmailDomainOwnershipEnvironmentDnsRecord {
}

export function dataPingoneTrustedEmailDomainOwnershipEnvironmentDnsRecordToTerraform(struct?: DataPingoneTrustedEmailDomainOwnershipEnvironmentDnsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneTrustedEmailDomainOwnershipEnvironmentDnsRecordToHclTerraform(struct?: DataPingoneTrustedEmailDomainOwnershipEnvironmentDnsRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneTrustedEmailDomainOwnershipEnvironmentDnsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneTrustedEmailDomainOwnershipEnvironmentDnsRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneTrustedEmailDomainOwnershipEnvironmentDnsRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataPingoneTrustedEmailDomainOwnershipRegions {
}

export function dataPingoneTrustedEmailDomainOwnershipRegionsToTerraform(struct?: DataPingoneTrustedEmailDomainOwnershipRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneTrustedEmailDomainOwnershipRegionsToHclTerraform(struct?: DataPingoneTrustedEmailDomainOwnershipRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneTrustedEmailDomainOwnershipRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingoneTrustedEmailDomainOwnershipRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneTrustedEmailDomainOwnershipRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingoneTrustedEmailDomainOwnershipRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingoneTrustedEmailDomainOwnershipRegionsOutputReference {
    return new DataPingoneTrustedEmailDomainOwnershipRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain_ownership pingone_trusted_email_domain_ownership}
*/
export class DataPingoneTrustedEmailDomainOwnership extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_trusted_email_domain_ownership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneTrustedEmailDomainOwnership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneTrustedEmailDomainOwnership to import
  * @param importFromId The id of the existing DataPingoneTrustedEmailDomainOwnership that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain_ownership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneTrustedEmailDomainOwnership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_trusted_email_domain_ownership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/trusted_email_domain_ownership pingone_trusted_email_domain_ownership} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneTrustedEmailDomainOwnershipConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneTrustedEmailDomainOwnershipConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_trusted_email_domain_ownership',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._trustedEmailDomainId = config.trustedEmailDomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_dns_record - computed: true, optional: false, required: false
  private _environmentDnsRecord = new DataPingoneTrustedEmailDomainOwnershipEnvironmentDnsRecordOutputReference(this, "environment_dns_record");
  public get environmentDnsRecord() {
    return this._environmentDnsRecord;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new DataPingoneTrustedEmailDomainOwnershipRegionsList(this, "regions", true);
  public get regions() {
    return this._regions;
  }

  // trusted_email_domain_id - computed: false, optional: false, required: true
  private _trustedEmailDomainId?: string; 
  public get trustedEmailDomainId() {
    return this.getStringAttribute('trusted_email_domain_id');
  }
  public set trustedEmailDomainId(value: string) {
    this._trustedEmailDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedEmailDomainIdInput() {
    return this._trustedEmailDomainId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      trusted_email_domain_id: cdktf.stringToTerraform(this._trustedEmailDomainId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_email_domain_id: {
        value: cdktf.stringToHclTerraform(this._trustedEmailDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
