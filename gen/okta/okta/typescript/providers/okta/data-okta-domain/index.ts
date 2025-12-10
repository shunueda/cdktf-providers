// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Brand ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/domain#domain_id_or_name DataOktaDomain#domain_id_or_name}
  */
  readonly domainIdOrName: string;
}
export interface DataOktaDomainDnsRecords {
}

export function dataOktaDomainDnsRecordsToTerraform(struct?: DataOktaDomainDnsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaDomainDnsRecordsToHclTerraform(struct?: DataOktaDomainDnsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaDomainDnsRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaDomainDnsRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaDomainDnsRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOktaDomainDnsRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataOktaDomainDnsRecordsOutputReference {
    return new DataOktaDomainDnsRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/domain okta_domain}
*/
export class DataOktaDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaDomain to import
  * @param importFromId The id of the existing DataOktaDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/domain okta_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_domain',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainIdOrName = config.domainIdOrName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_source_type - computed: true, optional: false, required: false
  public get certificateSourceType() {
    return this.getStringAttribute('certificate_source_type');
  }

  // dns_records - computed: true, optional: false, required: false
  private _dnsRecords = new DataOktaDomainDnsRecordsList(this, "dns_records", false);
  public get dnsRecords() {
    return this._dnsRecords;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_id_or_name - computed: false, optional: false, required: true
  private _domainIdOrName?: string; 
  public get domainIdOrName() {
    return this.getStringAttribute('domain_id_or_name');
  }
  public set domainIdOrName(value: string) {
    this._domainIdOrName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdOrNameInput() {
    return this._domainIdOrName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // public_certificate - computed: true, optional: false, required: false
  private _publicCertificate = new cdktf.StringMap(this, "public_certificate");
  public get publicCertificate() {
    return this._publicCertificate;
  }

  // validation_status - computed: true, optional: false, required: false
  public get validationStatus() {
    return this.getStringAttribute('validation_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id_or_name: cdktf.stringToTerraform(this._domainIdOrName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id_or_name: {
        value: cdktf.stringToHclTerraform(this._domainIdOrName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
