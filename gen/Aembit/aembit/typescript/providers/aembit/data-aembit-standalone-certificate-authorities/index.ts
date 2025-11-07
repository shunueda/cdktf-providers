// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/standalone_certificate_authorities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitStandaloneCertificateAuthoritiesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthorities {
  /**
  * Client workloads associated with the standalone certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/standalone_certificate_authorities#client_workload_count DataAembitStandaloneCertificateAuthorities#client_workload_count}
  */
  readonly clientWorkloadCount?: number;
  /**
  * Resource sets associated with the standalone certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/standalone_certificate_authorities#resource_set_count DataAembitStandaloneCertificateAuthorities#resource_set_count}
  */
  readonly resourceSetCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/standalone_certificate_authorities#tags DataAembitStandaloneCertificateAuthorities#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthoritiesToTerraform(struct?: DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_workload_count: cdktf.numberToTerraform(struct!.clientWorkloadCount),
    resource_set_count: cdktf.numberToTerraform(struct!.resourceSetCount),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthoritiesToHclTerraform(struct?: DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_workload_count: {
      value: cdktf.numberToHclTerraform(struct!.clientWorkloadCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_set_count: {
      value: cdktf.numberToHclTerraform(struct!.resourceSetCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientWorkloadCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientWorkloadCount = this._clientWorkloadCount;
    }
    if (this._resourceSetCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSetCount = this._resourceSetCount;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientWorkloadCount = undefined;
      this._resourceSetCount = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientWorkloadCount = value.clientWorkloadCount;
      this._resourceSetCount = value.resourceSetCount;
      this._tags = value.tags;
    }
  }

  // client_workload_count - computed: true, optional: true, required: false
  private _clientWorkloadCount?: number; 
  public get clientWorkloadCount() {
    return this.getNumberAttribute('client_workload_count');
  }
  public set clientWorkloadCount(value: number) {
    this._clientWorkloadCount = value;
  }
  public resetClientWorkloadCount() {
    this._clientWorkloadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientWorkloadCountInput() {
    return this._clientWorkloadCount;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // leaf_lifetime - computed: true, optional: false, required: false
  public get leafLifetime() {
    return this.getNumberAttribute('leaf_lifetime');
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

  // resource_set_count - computed: true, optional: true, required: false
  private _resourceSetCount?: number; 
  public get resourceSetCount() {
    return this.getNumberAttribute('resource_set_count');
  }
  public set resourceSetCount(value: number) {
    this._resourceSetCount = value;
  }
  public resetResourceSetCount() {
    this._resourceSetCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetCountInput() {
    return this._resourceSetCount;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthoritiesList extends cdktf.ComplexList {
  public internalValue? : DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthorities[] | cdktf.IResolvable

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
  public get(index: number): DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthoritiesOutputReference {
    return new DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/standalone_certificate_authorities aembit_standalone_certificate_authorities}
*/
export class DataAembitStandaloneCertificateAuthorities extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_standalone_certificate_authorities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitStandaloneCertificateAuthorities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitStandaloneCertificateAuthorities to import
  * @param importFromId The id of the existing DataAembitStandaloneCertificateAuthorities that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/standalone_certificate_authorities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitStandaloneCertificateAuthorities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_standalone_certificate_authorities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/standalone_certificate_authorities aembit_standalone_certificate_authorities} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitStandaloneCertificateAuthoritiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitStandaloneCertificateAuthoritiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_standalone_certificate_authorities',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // standalone_certificate_authorities - computed: true, optional: false, required: false
  private _standaloneCertificateAuthorities = new DataAembitStandaloneCertificateAuthoritiesStandaloneCertificateAuthoritiesList(this, "standalone_certificate_authorities", false);
  public get standaloneCertificateAuthorities() {
    return this._standaloneCertificateAuthorities;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
