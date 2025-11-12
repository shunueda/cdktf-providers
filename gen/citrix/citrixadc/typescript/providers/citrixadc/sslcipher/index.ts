// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcipherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher#ciphergroupname Sslcipher#ciphergroupname}
  */
  readonly ciphergroupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher#id Sslcipher#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ciphersuitebinding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher#ciphersuitebinding Sslcipher#ciphersuitebinding}
  */
  readonly ciphersuitebinding?: SslcipherCiphersuitebinding[] | cdktf.IResolvable;
}
export interface SslcipherCiphersuitebinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher#ciphername Sslcipher#ciphername}
  */
  readonly ciphername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher#cipherpriority Sslcipher#cipherpriority}
  */
  readonly cipherpriority?: number;
}

export function sslcipherCiphersuitebindingToTerraform(struct?: SslcipherCiphersuitebinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ciphername: cdktf.stringToTerraform(struct!.ciphername),
    cipherpriority: cdktf.numberToTerraform(struct!.cipherpriority),
  }
}


export function sslcipherCiphersuitebindingToHclTerraform(struct?: SslcipherCiphersuitebinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ciphername: {
      value: cdktf.stringToHclTerraform(struct!.ciphername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipherpriority: {
      value: cdktf.numberToHclTerraform(struct!.cipherpriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslcipherCiphersuitebindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslcipherCiphersuitebinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciphername !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphername = this._ciphername;
    }
    if (this._cipherpriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherpriority = this._cipherpriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslcipherCiphersuitebinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciphername = undefined;
      this._cipherpriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciphername = value.ciphername;
      this._cipherpriority = value.cipherpriority;
    }
  }

  // ciphername - computed: false, optional: false, required: true
  private _ciphername?: string; 
  public get ciphername() {
    return this.getStringAttribute('ciphername');
  }
  public set ciphername(value: string) {
    this._ciphername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphernameInput() {
    return this._ciphername;
  }

  // cipherpriority - computed: true, optional: true, required: false
  private _cipherpriority?: number; 
  public get cipherpriority() {
    return this.getNumberAttribute('cipherpriority');
  }
  public set cipherpriority(value: number) {
    this._cipherpriority = value;
  }
  public resetCipherpriority() {
    this._cipherpriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherpriorityInput() {
    return this._cipherpriority;
  }
}

export class SslcipherCiphersuitebindingList extends cdktf.ComplexList {
  public internalValue? : SslcipherCiphersuitebinding[] | cdktf.IResolvable

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
  public get(index: number): SslcipherCiphersuitebindingOutputReference {
    return new SslcipherCiphersuitebindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher citrixadc_sslcipher}
*/
export class Sslcipher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcipher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslcipher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslcipher to import
  * @param importFromId The id of the existing Sslcipher that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslcipher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcipher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher citrixadc_sslcipher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcipherConfig
  */
  public constructor(scope: Construct, id: string, config: SslcipherConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcipher',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ciphergroupname = config.ciphergroupname;
    this._id = config.id;
    this._ciphersuitebinding.internalValue = config.ciphersuitebinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphergroupname - computed: false, optional: false, required: true
  private _ciphergroupname?: string; 
  public get ciphergroupname() {
    return this.getStringAttribute('ciphergroupname');
  }
  public set ciphergroupname(value: string) {
    this._ciphergroupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphergroupnameInput() {
    return this._ciphergroupname;
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

  // ciphersuitebinding - computed: false, optional: true, required: false
  private _ciphersuitebinding = new SslcipherCiphersuitebindingList(this, "ciphersuitebinding", true);
  public get ciphersuitebinding() {
    return this._ciphersuitebinding;
  }
  public putCiphersuitebinding(value: SslcipherCiphersuitebinding[] | cdktf.IResolvable) {
    this._ciphersuitebinding.internalValue = value;
  }
  public resetCiphersuitebinding() {
    this._ciphersuitebinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersuitebindingInput() {
    return this._ciphersuitebinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ciphergroupname: cdktf.stringToTerraform(this._ciphergroupname),
      id: cdktf.stringToTerraform(this._id),
      ciphersuitebinding: cdktf.listMapper(sslcipherCiphersuitebindingToTerraform, true)(this._ciphersuitebinding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ciphergroupname: {
        value: cdktf.stringToHclTerraform(this._ciphergroupname),
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
      ciphersuitebinding: {
        value: cdktf.listMapperHcl(sslcipherCiphersuitebindingToHclTerraform, true)(this._ciphersuitebinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslcipherCiphersuitebindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
