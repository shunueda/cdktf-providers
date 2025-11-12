// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiIamPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_password_policy akamai_iam_password_policy}
*/
export class DataAkamaiIamPasswordPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_iam_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiIamPasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiIamPasswordPolicy to import
  * @param importFromId The id of the existing DataAkamaiIamPasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiIamPasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_iam_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_password_policy akamai_iam_password_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiIamPasswordPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiIamPasswordPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_iam_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
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

  // case_dif - computed: true, optional: false, required: false
  public get caseDif() {
    return this.getNumberAttribute('case_dif');
  }

  // max_repeating - computed: true, optional: false, required: false
  public get maxRepeating() {
    return this.getNumberAttribute('max_repeating');
  }

  // min_digits - computed: true, optional: false, required: false
  public get minDigits() {
    return this.getNumberAttribute('min_digits');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // min_letters - computed: true, optional: false, required: false
  public get minLetters() {
    return this.getNumberAttribute('min_letters');
  }

  // min_non_alpha - computed: true, optional: false, required: false
  public get minNonAlpha() {
    return this.getNumberAttribute('min_non_alpha');
  }

  // min_reuse - computed: true, optional: false, required: false
  public get minReuse() {
    return this.getNumberAttribute('min_reuse');
  }

  // pw_class - computed: true, optional: false, required: false
  public get pwClass() {
    return this.getStringAttribute('pw_class');
  }

  // rotate_frequency - computed: true, optional: false, required: false
  public get rotateFrequency() {
    return this.getNumberAttribute('rotate_frequency');
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
